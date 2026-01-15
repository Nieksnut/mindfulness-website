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
          Training & coaching voor organisaties
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Onderstaande vormen zijn bedoeld als richtlijn. De inhoud en prijs worden
          altijd afgestemd op de wensen van de organisatie, de doelgroep en het
          beoogde effect. Alle genoemde bedragen zijn indicatief en exclusief btw. De uiteindelijke prijs is afhankelijk van groepsgrootte, locatie en mate van maatwerk.
        </p>

        <h3 className="text-base md:text-lg font-semibold text-[#6b5e52] mb-2">
          1. Kennismakingsworkshop (instap)
        </h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          <span className="font-medium">Duur:</span> 2,5 uur<br />
          <span className="font-medium">Prijsindicatie:</span> €650,- (excl. btw)
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
          <li>Introductie mindfulness op de werkvloer</li>
          <li>Stress-educatie (theorie en herkenning)</li>
          <li>Praktische mindfulness- en ademhalingsoefeningen</li>
          <li>Ruimte voor reflectie en vragen</li>
        </ul>

        {/* <h3 className="text-base md:text-lg font-semibold text-[#6b5e52] mb-2">
          2. Standaard bedrijfssessie (meest gekozen)
        </h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          <span className="font-medium">Duur:</span> 2,5 uur<br />
          <span className="font-medium">Prijsindicatie:</span> €950,- (excl. btw)
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
          <li>Mindfulness en stress in relatie tot werkdruk</li>
          <li>Verdiepende oefeningen (aandacht, adem en lichaam)</li>
          <li>Praktische handvatten voor toepassing tijdens de werkdag</li>
          <li>Afstemming op de specifieke werksituatie of sector</li>
        </ul>

        <div className="bg-[#f4efe9] border-l-4 border-[#6b5e52] px-4 py-4 mb-8">
          <p className="text-gray-700 leading-relaxed">
            <span className="font-medium text-[#6b5e52]">
              Twijfel je tussen optie 1 en 2?
            </span>
            <br />
            De kennismakingsworkshop (optie 1) is vooral bedoeld als eerste
            introductie: om medewerkers kennis te laten maken met mindfulness
            en bewustwording rondom stress te vergroten.
            <br />
            <br />
            De standaard bedrijfssessie (optie 2) gaat een stap verder en is
            geschikt voor organisaties waar werkdruk, stress of verminderde
            focus al merkbaar is. Medewerkers krijgen niet alleen inzicht,
            maar ook concrete handvatten om mindfulness toe te passen tijdens
            de werkdag.
            <br />
            <br />
            <span className="italic">
              Daarom wordt deze sessie het meest gekozen door organisaties
              die daadwerkelijk effect willen ervaren.
            </span>
          </p>
        </div> */}

        <h3 className="text-base md:text-lg font-semibold text-[#6b5e52] mb-2">
          2. Traject of meerdere sessies
        </h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          <span className="font-medium">Voorbeeld:</span> 3 sessies van 2,5 uur<br />
          <span className="font-medium">Prijsindicatie:</span> €1.800,- totaal
          (excl. btw)
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
          <li>Meer verdieping en herhaling over meerdere momenten</li>
          <li>Groter effect op stressreductie en gedragsverandering</li>
          <li>Lagere prijs per sessie dan losse afname</li>
          <li>Inclusief intake en evaluatiemoment</li>
        </ul>

        <p className="text-gray-700 leading-relaxed">
          Wil je samen kijken welke vorm het beste past bij jullie organisatie?
          Neem gerust contact op voor een vrijblijvende afstemming.
        </p>
      </div>
    </section>
  );
}