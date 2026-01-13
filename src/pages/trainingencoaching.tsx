import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import OverMindfulnessBlock from "../components/PraktischBlock";
import KostenVergoedingenBlock from '@/components/KostenVergoedingenBlock';
import VoorwaardenBlock from '@/components/VoorwaardenBlock';

export default function Over() {
  return (
    <>
      <Hero />
      <Navbar />
      <main>
        <section className="p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[#6b5e52]">Over mindfulness</h1>
          <p className="mt-4 text-gray-700">
            Hier vind je praktische informatie over mindfulness training en coaching,
            de aanpak die ik hanteer, en wat je kunt verwachten van de sessies.
          </p>
        </section>

        <OverMindfulnessBlock />
        <KostenVergoedingenBlock />
        <VoorwaardenBlock />
      </main>
    </>
  );
}