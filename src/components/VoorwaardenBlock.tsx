import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function VoorwaardenBlock() {
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
      className={`flex flex-col md:flex-row items-start justify-center gap-12 px-6 py-16 bg-[#f9f5f0] border-t border-[#e7dfd6] text-center md:text-left max-w-7xl mx-auto transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-[#6b5e52] mb-4">
          Voorwaarden
        </h2>

        <h3 className="text-xl font-semibold text-[#6b5e52] mt-6 mb-2">
          Aanmelding en betaling
        </h3>

        <p className="text-gray-700 mb-4">
          Na het invullen van het intakeformulier (en een kort telefonisch contact met
          de trainer) beslis je of je wilt deelnemen. Als je je aanmeldt, stem je in
          met de algemene voorwaarden.
        </p>

        <ul className="list-disc text-gray-700 mb-6 pl-6 space-y-2">
          <li>Na aanmelding wordt je plek gereserveerd en ontvang je de factuur.</li>
          <li>
            De factuur dient binnen 14 dagen betaald te zijn en altijd vóór aanvang
            van de training.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#6b5e52] mt-6 mb-2">
          Annulering en restitutie
        </h3>

        <ul className="list-disc text-gray-700 mb-6 pl-6 space-y-2">
          <li>
            Bij annulering van de training door de trainer zelf, wordt het betaalde
            bedrag volledig teruggestort als de training nog niet is begonnen.
            Wanneer deze wel is begonnen, wordt er gekeken naar de verhouding van de
            gevolgde sessies, en aan de hand daarvan berekend hoeveel de deelnemer
            terug krijgt.
          </li>
          <li>
            De trainer is niet aansprakelijk voor eventuele andere schade als gevolg
            van het niet doorgaan van de training.
          </li>
        </ul>

        <p className="text-gray-700 mb-4">
          Mocht je zelf onverhoopt toch afzien van deelname:
        </p>

        <ul className="list-disc text-gray-700 mb-6 pl-6 space-y-2">
          <li>Tot een week voor aanvang kun je kosteloos annuleren.</li>
          <li>
            Bij annulering in de laatste week vóór de start is restitutie helaas niet
            meer mogelijk.
          </li>
          <li>Gemiste bijeenkomsten tijdens de training worden niet vergoed. 
              Je krijgt dan via de mail informatie over de gemiste sessie, zodat je door kunt gaan met de gehele training. </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#6b5e52] mt-6 mb-2">
          Let op: deelname is op eigen verantwoordelijkheid
        </h3>

        <p className="text-gray-700">
          De mindfulness training is géén therapie en vervangt geen medische of
          psychologische behandeling. Heb je fysieke of psychische klachten? Geef dit
          dan van tevoren aan bij de trainer, zodat er zorgvuldig met je situatie kan
          worden omgegaan. De trainer (Claire Daamen) kan niet aansprakelijk worden
          gesteld voor lichamelijk of psychisch letsel, noch voor verlies of diefstal
          van persoonlijke eigendommen.
        </p>
      </div>
      {/* Afbeelding */}
      <div className="w-full md:w-1/2 md:order-2">
        <Image
          src="/images/voorwaarden.png"
          alt="Rust en aandacht in de natuur"
          width={800}
          height={550}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      
    </section>
  );
}
