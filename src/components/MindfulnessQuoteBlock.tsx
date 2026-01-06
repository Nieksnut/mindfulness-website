import Image from "next/image";

export default function MindfulnessQuoteBlock() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-25 px-6 py-16 bg-[#f9f5f0] border-t border-[#e7dfd6] text-center md:text-left max-w-6xl mx-auto">
      {/* Afbeelding links */}
      <div className="w-full md:w-1/2">
        <Image
          src="/images/home_inspire3.png"
          alt="Let go quote visual"
          width={600}
          height={400}
          className="w-full h-auto rounded"
        />
      </div>

      {/* Tekstblok rechts */}
      <div className="w-full md:w-1/3 flex flex-col justify-center md:justify-start h-full">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-[#6b5e52]">
          Ontdek de kracht van mindfulness
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
        In ons dagelijks leven worden we vaak geleefd door drukte, verplichtingen en een eindeloze stroom aan gedachten. Veel mensen voelen zich opgejaagd, gespannen of vermoeid. Mindfulness nodigt je uit om weer thuis te komen bij jezelf. Om rust te vinden in het huidige moment en met meer helderheid, mildheid en aandacht in het leven te staan. <a
          href="/mindfulness"
          className="font-medium text-[#6b5e52] underline hover:text-[#4a4037] transition-colors"
        >
          Lees verder →
        </a>
        </p>
      </div>
    </section>
  );
}