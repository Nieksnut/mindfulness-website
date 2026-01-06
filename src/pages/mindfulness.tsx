import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import OverMindfulnessBlock from "../components/OverMindfulnessBlock";

export default function Over() {
  return (
    <>
      <Hero />
      <Navbar />
      <main>
        <section className="p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[#6b5e52]">Over mindfulness</h1>
          <p className="mt-4 text-gray-700">
            Mindfulness helpt je om met aandacht aanwezig te zijn in het moment,
            met een open en niet-oordelende houding.
          </p>
        </section>

        <OverMindfulnessBlock />
      </main>
    </>
  );
}