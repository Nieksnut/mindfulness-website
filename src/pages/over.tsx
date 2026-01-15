import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OverDeTrainerBlok from "../components/OverDeTrainerBlok";

export default function Over() {
  return (
    <>
      <Hero />
      <Navbar />
      <main>
        <section className="p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[#6b5e52]">Over de trainer</h1>
          <p className="mt-4 text-gray-700">
            Maak kennis met Claire en haar manier van werken: warm, helder en
            zorgvuldig.
          </p>
        </section>

        <OverDeTrainerBlok />
      </main>
    </>
  );
}