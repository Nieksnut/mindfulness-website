import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function OverMindfulnessBlok() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`flex flex-col md:flex-row items-start justify-center gap-12 px-6 py-16 bg-[#f9f5f0] text-center md:text-left max-w-7xl mx-auto transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Tekst */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-[#6b5e52] mb-4">
          Leven met aandacht
        </h2>

        <p className="text-gray-700 mb-4">
          In ons dagelijks leven worden we vaak geleefd door drukte,
          verplichtingen en een eindeloze stroom aan gedachten. Veel mensen
          voelen zich opgejaagd, gespannen of vermoeid.
        </p>

        <p className="text-gray-700 mb-4">
          Mindfulness nodigt je uit om weer thuis te komen bij jezelf.
          Om rust te vinden in het huidige moment en met meer helderheid,
          mildheid en aandacht in het leven te staan.
        </p>

        <h3 className="text-xl font-semibold text-[#6b5e52] mt-8 mb-2">
          Wat is het doel van een mindfulness training (MBSR)?
        </h3>

        <p className="text-gray-700 mb-4">
          De Mindfulness-Based Stress Reduction (MBSR) training is een
          wetenschappelijk onderbouwde training van acht weken. Je leert
          bewuster aanwezig te zijn en ontwikkelt vaardigheden om anders
          om te gaan met stress, piekergedachten, emoties en lichamelijke
          spanningen.
        </p>

        <p className="text-gray-700 mb-4">
          Niet door alles te willen oplossen, maar door een andere relatie
          aan te gaan met wat er speelt — met meer acceptatie en minder
          oordeel.
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>meer rust en balans te ervaren</li>
          <li>veerkrachtiger om te gaan met uitdagingen</li>
          <li>automatische patronen te herkennen</li>
          <li>vriendelijker te zijn voor jezelf en anderen</li>
        </ul>

        <p className="text-gray-700 mb-4">
          Mindfulness is geen trucje of quick fix, maar een manier van leven.
          Een uitnodiging om steeds opnieuw terug te keren naar het enige
          moment dat er werkelijk toe doet: dit moment.
        </p>

        <p className="text-gray-700">
          Of je nu verlangt naar meer rust, verdieping of een andere manier
          van omgaan met stress — je bent van harte welkom. De training is
          toegankelijk voor iedereen, met of zonder meditatie-ervaring.
        </p>
      </div>

      {/* Afbeelding */}
      <div className="w-full md:w-1/2 md:order-2">
        <Image
          src="/images/mindfulness-1.webp"
          alt="Rust en aandacht in de natuur"
          width={800}
          height={550}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}