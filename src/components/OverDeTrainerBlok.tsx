import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function OverDeTrainerBlok() {
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
      className={`flex flex-col md:flex-row items-start justify-center gap-12 px-6 py-16 bg-[#f9f5f0] border-t border-[#e7dfd6] text-center md:text-left max-w-7xl mx-auto transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Afbeelding */}
      <div className="w-full md:w-1/2">
        <Image
          src="/images/claire-1.jpg"
          alt="Claire – mindfulness trainer"
          width={800}
          height={550}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Tekst */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-[#6b5e52] mb-4">
          Over de trainer
        </h2>

        <p className="text-gray-700 mb-4">
          Claire is mindfulness trainer en begeleidt mensen die willen leven met
          meer aandacht, rust en bewustzijn. Haar manier van werken is
          zorgvuldig, warm en helder, met ruimte voor wat zich aandient.
          Zonder oordeel en zonder haast.
        </p>

        <p className="text-gray-700 mb-4">
          Vanuit haar eigen ervaring met mindfulness weet Claire hoe waardevol
          het kan zijn om even stil te staan. Niet om iets te veranderen of te
          verbeteren, maar om werkelijk aanwezig te zijn bij wat er nu is.
          Juist daar ontstaat vaak meer ruimte, inzicht en zachtheid.
        </p>

        <p className="text-gray-700 mb-4">
          In de trainingen staat veiligheid en aandacht centraal. Er is ruimte
          voor ieders proces, in een tempo dat past. Claire begeleidt met
          betrokkenheid en helderheid, en nodigt uit tot een onderzoekende en
          vriendelijke houding naar jezelf.
        </p>

        <p className="text-gray-700">
          Of je nu op zoek bent naar meer rust, verdieping of een andere manier
          van omgaan met stress. Je bent welkom zoals je bent. De training is
          een uitnodiging om te vertragen, te luisteren en opnieuw contact te
          maken met jezelf.
        </p>
      </div>
    </section>
  );
}