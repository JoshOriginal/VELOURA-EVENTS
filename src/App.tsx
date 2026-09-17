import { AdditionalServices } from "./components/AdditionalServices";
import { Collections } from "./components/Collections";
import { Experience } from "./components/Experience";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { PlanningJourney } from "./components/PlanningJourney";
import { ScrollProgress } from "./components/ScrollProgress";
import { Welcome } from "./components/Welcome";
import { WhatsAppButton } from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <Welcome />
        <Experience />
        <Collections />
        <AdditionalServices />
        <PlanningJourney />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
