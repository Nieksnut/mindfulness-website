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
          Kosten
        </h2>

        <h3 className="text-base md:text-lg font-semibold text-[#6b5e52] mb-2">
          Kosten van individuele begeleiding
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          De investering voor het individuele coachingstraject bedraagt{" "}
          <span className="font-medium text-[#6b5e52]">€425,-</span>. Dit betreft een
          persoonlijk traject van meerdere sessies, volledig afgestemd op jouw
          situatie en tempo.
          <br />
          <span className="text-gray-600">
            *Afhankelijk van de situatie kan dit traject btw-vrijgesteld zijn. Dit
            bespreken we altijd vooraf.
          </span>
        </p>

        <h3 className="text-base md:text-lg font-semibold text-[#6b5e52] mb-2">
          Coaching via je werkgever?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Wanneer de begeleiding wordt vergoed door een werkgever (bijvoorbeeld in het
          kader van persoonlijke ontwikkeling of duurzame inzetbaarheid), geldt een
          tarief van{" "}
          <span className="font-medium text-[#6b5e52]">€495,- exclusief btw</span>.
          Steeds meer organisaties ondersteunen dit, omdat mindfulness aantoonbaar
          bijdraagt aan stressreductie, focus en veerkracht.
        </p>
      </div>
    </section>
  );
}