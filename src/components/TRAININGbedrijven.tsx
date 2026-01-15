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
          Mindfulnesstraining voor bedrijven
        </h2>

        <p className="text-gray-700 mb-4">
          In een werkomgeving waar de druk steeds hoger wordt, is mentale veerkracht essentieel. Ik bied mindfulnesstrainingen voor bedrijven die medewerkers ondersteunen om bewuster om te gaan met stress, hun focus te verbeteren en met meer rust en energie te werken.
        </p>

        <h3 className="text-xl font-semibold text-[#6b5e52] mt-6 mb-2">
          Wat houdt de training in?
        </h3>

        <ul className="list-disc text-gray-700 mb-6 pl-6 space-y-2">
          <li>Trainingen afgestemd op de wensen en context van de organisatie</li>
          <li>Geschikt voor grotere of kleinere groepen collega’s</li>
          <li>Combinatie van mindfulnessoefeningen, stress-educatie en praktische technieken</li>
          <li>Aandachtstraining, ademhalingsoefeningen en korte meditaties</li>
          <li>Inzicht in stresspatronen, herstel en mentale veerkracht op de werkvloer</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#6b5e52] mt-2 mb-2">
          Vorm en opzet
        </h3>

        <p className="text-gray-700 mb-4">
          De trainingen zijn flexibel inzetbaar en kunnen bestaan uit een eenmalige workshop of een uitgebreider traject. Elke training biedt concrete handvatten om stress te verminderen, de samenwerking te versterken en het werkplezier te vergroten.
        </p>

        <p className="text-gray-700">
          Wil je meer weten over de mogelijkheden of bespreken wat het beste past bij jouw organisatie? Neem gerust contact met me op voor meer informatie of een vrijblijvend kennismakingsgesprek.
        </p>

      </div>

      {/* Afbeelding */}
      <div className="w-full md:w-1/2 md:order-2">
        <Image
          src="/images/bedrijven.png"
          alt="Rust en aandacht in de natuur"
          width={800}
          height={550}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}