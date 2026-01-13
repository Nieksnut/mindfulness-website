import { useEffect, useRef, useState } from "react";

export default function KostenVergoedingenBlock() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`flex justify-center px-6 py-16 bg-[#f9f5f0] border-t border-[#e7dfd6] text-center md:text-left max-w-7xl mx-auto transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-full flex flex-col justify-center md:justify-start h-full">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-[#6b5e52]">
          Kosten en vergoedingen
        </h2>

        <h3 className="text-base md:text-lg font-semibold text-[#6b5e52] mb-2">
          Kosten van de mindfulness training
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          De investering voor de reguliere 8-weekse mindfulness training bedraagt €326,- exclusief 21% btw. Dit is inclusief een uitgebreid werkboek en begeleidende audiotracks. Totaalprijs inclusief btw is €395,-.
        </p>

        <h3 className="text-base md:text-lg font-semibold text-[#6b5e52] mb-2">
          Training via je werkgever?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Wanneer de training wordt vergoed door een werkgever (bijvoorbeeld in het kader van persoonlijke ontwikkeling of duurzame inzetbaarheid), geldt een tarief van €495,- exclusief btw. Steeds meer organisaties ondersteunen hun medewerkers hierin, omdat mindfulness aantoonbaar bijdraagt aan stressreductie, focus en veerkracht.
        </p>

        <h3 className="text-base md:text-lg font-semibold text-[#6b5e52] mb-2">
          Vergoeding via de zorgverzekeraar
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Een aantal zorgverzekeraars biedt (gedeeltelijke) vergoeding voor mindfulness trainingen, mits deze wordt gegeven door een trainer die is aangesloten bij de VMBN in categorie 1. Aan deze voorwaarde voldoe ik als trainer.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Zorgverzekeraars zoals Interpolis, Zilveren Kruis en FBTO vragen daarnaast om een trainer met een AGB-code. Ook deze heb ik. Let op: sommige verzekeraars kunnen vragen om een verwijsbrief van je huisarts of bedrijfsarts. Het is aan te raden dit vooraf te controleren bij je zorgverzekeraar.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Veel zorgverzekeraars vergoeden (deels) een mindfulness training, met een gemiddelde vergoeding rond de €350,-. Let op: de vergoeding heeft geen invloed op je eigen risico.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Wil je weten of jouw verzekering dit vergoedt? Bekijk je polisvoorwaarden, neem contact op met je verzekeraar of raadpleeg het actuele overzicht op{" "}
          <a
            href="https://www.zorgwijzer.nl/vergoeding/mindfulness"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#6b5e52] underline hover:text-[#4a4037] transition-colors"
          >
            zorgwijzer.nl/vergoeding/mindfulness
          </a>
          .
        </p>

        <h3 className="text-base md:text-lg font-semibold text-[#6b5e52] mb-2">
          Vergoeding voor mantelzorgers via de gemeente
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Veel mantelzorgers dragen vandaag de dag extra zorgverantwoordelijkheid door de veranderingen in de zorg. Gemeenten kunnen hierin ondersteunen via de WMO (Wet Maatschappelijke Ondersteuning). In sommige gevallen is het mogelijk om een mindfulness training (gedeeltelijk) vergoed te krijgen als mantelzorger – via de gemeente of je zorgverzekeraar. Informeer bij jouw gemeente of je hiervoor in aanmerking komt.
        </p>
      </div>
    </section>
  );
}