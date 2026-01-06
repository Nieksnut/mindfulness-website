import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

export default function Over() {
  return (
    <>
      <Hero />
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-[#6b5e52]">Over Claire</h1>
        <p className="mt-4 text-gray-700">
          Hier komt praktische informatie over de trainingen, zoals locatie, data, kosten en aanmeldingsprocedure.  
        </p>
      </main>
    </>
  );
}