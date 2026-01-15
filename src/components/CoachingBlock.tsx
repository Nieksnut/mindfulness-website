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
          Individuele Begeleiding
        </h2>

        <p className="text-gray-700 mb-4">
         Naast de 8-weekse MBSR-groepstrainingen bied ik ook individuele mindfulness sessies aan. In een veilige en persoonlijke setting kijken we samen naar jouw specifieke vragen en uitdagingen. Dit kan helpen bij het verminderen van stress, het vergroten van veerkracht en het beter omgaan met gedachten en emoties in het dagelijks leven.
        </p>

        <h3 className="text-xl font-semibold text-[#6b5e52] mt-6 mb-2">
          Wat kun je verwachten?
        </h3>

        <ul className="list-disc list-outside pl-6 text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>5 sessies van 75 minuten (1 op 1)</li>
          <li>
            Sessies volledig afgestemd op jouw situatie en tempo
            Geen vast programma, maar begeleiding op maat.
          </li>
          <li>
            Mindfulnessoefeningen, adem- en lichaamswerk
            Gericht op ontspanning, bewustwording en regulatie van stress.
          </li>
          <li>Verkennen van terugkerende patronen in denken en reageren
            Met aandacht voor wat zich in het moment aandient.
            </li>
          <li>
            Ruimte voor reflectie, vragen en verdieping
            In een veilige setting met persoonlijke aandacht.
          </li>
          <li>
            Tussen de sessies eenvoudige oefeningen ter ondersteuning
            Passend bij jouw mogelijkheden en dagelijkse ritme.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#6b5e52] mt-6 mb-2">
          Praktische informatie
        </h3>

        <p className="text-gray-700 mb-4">
        Elke sessie wordt afgestemd op jouw tempo en behoeften, met mindfulnessoefeningen, adem- en lichaamstechnieken en praktische handvatten om in het dagelijks leven toe te passen. Het traject biedt ruimte om te vertragen, te oefenen en inzichten stap voor stap te integreren.
        </p>

        <p className="text-gray-700 mb-4">
          Vooraf is een kort, vrijblijvend kennismakingsgesprek mogelijk om jouw wensen te bespreken en te kijken of individuele begeleiding passend is. Zo kunnen we samen een traject op maat samenstellen dat bij jou past.
        </p>

        <p className="text-gray-700">
          Neem gerust contact met me op voor meer informatie of om een kennismakingsgesprek in te plannen.
        </p>


1-1

      </div>

      {/* Afbeelding */}
      <div className="w-full md:w-1/2 md:order-2">
        <Image
          src="/images/1-1.png"
          alt="Rust en aandacht in de natuur"
          width={800}
          height={550}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}