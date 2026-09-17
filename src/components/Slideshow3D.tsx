import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { imgSrc, imgSrcSet, type Img } from "../data/images";

type Slideshow3DProps = {
  images: Img[];
};

const AUTO_ADVANCE_MS = 4400;
// Fraction of the carousel's own width a drag must cover to move one slide.
const DRAG_STEP_RATIO = 0.32;

export function Slideshow3D({ images }: Slideshow3DProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [dragOffset, setDragOffset] = useState(0); // in fractional slide-steps
  const [isDragging, setIsDragging] = useState(false);
  const reduced = useReducedMotion();
  const count = images.length;

  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<{
    pointerId: number;
    startX: number;
    trackWidth: number;
    captured: boolean;
  } | null>(null);
  const justDraggedRef = useRef(false);

  useEffect(() => {
    if (reduced || paused || hasInteracted || count < 2) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % count);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [reduced, paused, hasInteracted, count]);

  const goTo = (i: number) => {
    setHasInteracted(true);
    setActive(((i % count) + count) % count);
  };
  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  const DRAG_ENGAGE_PX = 5;

  const onPointerDown = (e: React.PointerEvent) => {
    if (count < 2 || (e.pointerType === "mouse" && e.button !== 0)) return;
    const width = trackRef.current?.getBoundingClientRect().width ?? 1;
    dragState.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      trackWidth: width,
      captured: false,
    };
    // Pointer capture is deferred until real movement is detected (below),
    // so a plain tap/click never has its native click event disrupted.
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const drag = dragState.current;
    if (!drag || drag.pointerId !== e.pointerId) return;
    const deltaX = e.clientX - drag.startX;

    if (!drag.captured) {
      if (Math.abs(deltaX) < DRAG_ENGAGE_PX) return;
      drag.captured = true;
      trackRef.current?.setPointerCapture(e.pointerId);
      setIsDragging(true);
    }

    const stepPx = drag.trackWidth * DRAG_STEP_RATIO;
    setDragOffset(-deltaX / stepPx);
  };

  const endDrag = (e: React.PointerEvent) => {
    const drag = dragState.current;
    if (!drag || drag.pointerId !== e.pointerId) return;

    if (drag.captured) {
      justDraggedRef.current = true;
      setHasInteracted(true);
      const targetIndex = Math.round(active + dragOffset);
      setActive(((targetIndex % count) + count) % count);
      if (trackRef.current?.hasPointerCapture(e.pointerId)) {
        trackRef.current.releasePointerCapture(e.pointerId);
      }
    }

    dragState.current = null;
    setIsDragging(false);
    setDragOffset(0);
  };

  const effectiveActive = active + (isDragging ? dragOffset : 0);

  return (
    <div
      className="relative mx-auto mt-2 w-full max-w-4xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="relative h-[220px] w-full touch-pan-y select-none sm:h-[300px] lg:h-[360px]"
        style={{
          perspective: "1400px",
          cursor: count > 1 ? (isDragging ? "grabbing" : "grab") : undefined,
        }}
        role="region"
        aria-roledescription="carousel"
        aria-label="Veloura wedding highlights"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div
          className="relative h-full w-full pointer-events-none"
          style={{ transformStyle: "preserve-3d" }}
        >
          {images.map((img, i) => {
            let offset = i - effectiveActive;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            const abs = Math.abs(offset);
            const hidden = abs > 2;
            const isActive = Math.round(offset) === 0 && abs < 0.5;

            const translateXPercent = offset * 92;
            const translateZ = -Math.min(abs, 2) * 160;
            const rotateY =
              Math.sign(offset || 1) * -1 * Math.min(abs, 1) * 42;
            const scale = 1 - Math.min(abs, 2) * 0.17;
            const opacity = hidden ? 0 : 1 - Math.min(abs, 2) * 0.42;

            return (
              <button
                key={img.slug}
                type="button"
                draggable={false}
                onClick={() => {
                  if (justDraggedRef.current) {
                    justDraggedRef.current = false;
                    return;
                  }
                  goTo(i);
                }}
                aria-label={`Show slide ${i + 1} of ${count}`}
                aria-current={isActive}
                tabIndex={hidden ? -1 : 0}
                className="absolute left-1/2 top-1/2 aspect-[4/5] w-[58vw] max-w-[240px] overflow-hidden shadow-none sm:w-[220px] lg:w-[260px]"
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateXPercent}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex: 20 - Math.round(abs * 10),
                  pointerEvents: hidden ? "none" : "auto",
                  transition: isDragging
                    ? "none"
                    : "transform 0.9s cubic-bezier(0.16,1,0.3,1), opacity 0.9s cubic-bezier(0.16,1,0.3,1), box-shadow 0.7s ease",
                  boxShadow: isActive
                    ? "0 30px 60px -20px rgba(0,0,0,0.55)"
                    : "0 12px 30px -12px rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src={imgSrc(img, 480)}
                  srcSet={imgSrcSet(img, [320, 480, 640])}
                  sizes="(min-width: 1024px) 260px, (min-width: 640px) 220px, 58vw"
                  alt={img.alt}
                  draggable={false}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <span
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 ring-1 ring-inset transition-colors duration-700 ${
                    isActive ? "ring-orchid/40" : "ring-ivory/10"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/25 text-ivory/70 transition-colors hover:border-orchid hover:text-orchid"
        >
          &larr;
        </button>
        <span className="font-display text-sm tracking-[0.25em] text-ivory/60">
          {String(active + 1).padStart(2, "0")}
          <span className="mx-1.5 text-ivory/30">/</span>
          {String(count).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/25 text-ivory/70 transition-colors hover:border-orchid hover:text-orchid"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
