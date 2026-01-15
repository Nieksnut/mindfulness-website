import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PraktischBlock() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`flex flex-col md:flex-row items-start justify-center gap-12 px-6 py-16 bg-[#f9f5f0] border-t border-[#e7dfd6] text-center md:text-left max-w-7xl mx-auto transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Tekst */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-[#6b5e52] mb-4">
          8-weekse Mindfulness Training (MBSR)
        </h2>

        <p className="text-gray-700 mb-4">
          De 8-weekse training Mindfulness-Based Stress Reduction (MBSR) is een
          praktische en wetenschappelijk onderbouwde methode om anders om te gaan
          met stress, piekeren en onrust. In acht wekelijkse bijeenkomsten leer je
          stap voor stap om meer aanwezig te zijn in het moment. Met meer rust,
          helderheid en veerkracht.
        </p>

        <h3 className="text-xl font-semibold text-[#6b5e52] mt-6 mb-2">
          Wat kun je verwachten?
        </h3>

        <ul className="list-disc text-gray-700 mb-6 pl-6 space-y-2">
          <li>8 bijeenkomsten van 2,5 uur (groepstraining)</li>
          <li>
            Praktische oefeningen zoals zit- en lichaamsmeditatie, beweging (mindful yoga)
            en korte reflectiemomenten
          </li>
          <li>
            Thema’s als omgaan met stress, automatische patronen herkennen, acceptatie en
            zelfzorg
          </li>
          <li>Dagelijkse thuisoefeningen ter verdieping</li>
          <li>
            Heldere uitleg, ruimte voor uitwisseling en begeleiding door een gecertificeerde
            trainer
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#6b5e52] mt-2 mb-2">
          Optionele stiltedag
        </h3>

        <p className="text-gray-700 mb-4">
          Halverwege of aan het einde van de training is er een stilte- of
          oefendag van ongeveer 6 uur. Deze dag biedt ruimte om in rust en
          verdieping te oefenen, zonder afleiding van buitenaf. Deelnemers
          ervaren dit vaak als een waardevolle en verhelderende ervaring.
        </p>

        <p className="text-gray-700">
          Deze training is geschikt voor iedereen die bewuster wil leven, beter
          wil omgaan met stress en zichzelf meer ruimte gunt. Heb je vragen of
          wil je even overleggen of de training bij je past? Neem gerust contact
          op.
        </p>
      </div>

      {/* Afbeelding */}
      <div className="w-full md:w-1/2 md:order-2">
        <Image
          src="/images/training_route.png"
          alt="Rust en aandacht in de natuur"
          width={800}
          height={550}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}