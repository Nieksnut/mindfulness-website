import { useEffect, useRef, useState } from "react";

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
      className={`flex justify-center px-6 py-16 bg-[#f9f5f0] border-t border-[#e7dfd6] text-center md:text-left max-w-7xl mx-auto transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-full flex flex-col justify-center md:justify-start h-full">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-[#6b5e52]">
          Voorwaarden
        </h2>

        <h3 className="text-base md:text-lg font-semibold text-[#6b5e52] mb-2">
          Aanmelding en betaling
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          Na het invullen van het intakeformulier (en een kort telefonisch contact met
          de trainer) beslis je of je wilt deelnemen. Als je je aanmeldt, stem je in
          met de algemene voorwaarden.
        </p>

        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
          <li>Na aanmelding wordt je plek gereserveerd en ontvang je de factuur.</li>
          <li>
            De factuur dient binnen 14 dagen betaald te zijn en altijd vóór aanvang
            van de training.
          </li>
        </ul>

        <h3 className="text-base md:text-lg font-semibold text-[#6b5e52] mb-2">
          Annulering en restitutie
        </h3>

        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
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

        <p className="text-gray-700 leading-relaxed mb-4">
          Mocht je zelf onverhoopt toch afzien van deelname:
        </p>

        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
          <li>Tot een week voor aanvang kun je kosteloos annuleren.</li>
          <li>
            Bij annulering in de laatste week vóór de start is restitutie helaas niet
            meer mogelijk.
          </li>
          <li>Gemiste bijeenkomsten tijdens de training worden niet vergoed.</li>
        </ul>

        <h3 className="text-base md:text-lg font-semibold text-[#6b5e52] mb-2">
          Let op: deelname is op eigen verantwoordelijkheid
        </h3>

        <p className="text-gray-700 leading-relaxed">
          De mindfulness training is géén therapie en vervangt geen medische of
          psychologische behandeling. Heb je fysieke of psychische klachten? Geef dit
          dan van tevoren aan bij de trainer, zodat er zorgvuldig met je situatie kan
          worden omgegaan. De trainer (Claire Daamen) kan niet aansprakelijk worden
          gesteld voor lichamelijk of psychisch letsel, noch voor verlies of diefstal
          van persoonlijke eigendommen.
        </p>
      </div>
    </section>
  );
}
