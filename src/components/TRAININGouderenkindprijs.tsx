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

  Vijf weken samen

</h2>

<p className="text-gray-700 leading-relaxed mb-4">

  Gedurende vijf weken komen ouder en kind één uur per week samen. We bespreken

  samen wanneer we dit in de agenda plannen. Iedere bijeenkomst heeft een eigen

  thema en bouwt voort op de vorige week.

</p>

<p className="text-gray-700 leading-relaxed mb-4">

  De oefeningen zijn eenvoudig en kunnen ook thuis worden toegepast. Zo wordt

  mindfulness niet alleen iets wat je tijdens de training doet, maar iets wat

  langzaam onderdeel kan worden van het dagelijks leven.

</p>

<ul className="list-disc list-inside text-gray-700 leading-relaxed mb-8">

  <li>Een moment van aandacht tijdens het ontbijt</li>

  <li>Even samen ademhalen voordat je reageert</li>

  <li>Een wandeling met aandacht voor wat je ziet en hoort</li>

  <li>Of simpelweg een paar minuten samen zitten</li>

</ul>

<h3 className="text-base md:text-lg font-semibold text-[#6b5e52] mb-2">

  Voor wie?

</h3>

<p className="text-gray-700 leading-relaxed mb-4">

  Deze training is voor ouders/verzorgers die samen met hun kind op een

  laagdrempelige manier willen kennismaken met mindfulness en meer aandacht en

  verbinding willen ervaren in het dagelijks leven.

</p>

<ul className="list-disc list-inside text-gray-700 leading-relaxed mb-8">

  <li>Er is geen ervaring met meditatie nodig</li>

  <li>Je hoeft het niet goed te kunnen</li>

  <li>We oefenen juist met aanwezig zijn bij wat er is</li>

</ul>

<h3 className="text-base md:text-lg font-semibold text-[#6b5e52] mb-2">

  Praktische informatie

</h3>

<p className="text-gray-700 leading-relaxed mb-6">

  <span className="font-medium">Duur:</span> 5 weken<br />

  <span className="font-medium">Frequentie:</span> 1 bijeenkomst per week<br />

  <span className="font-medium">Duur per bijeenkomst:</span> 60 minuten<br />

  <span className="font-medium">Voor:</span> ouder/verzorger + kind<br />

  <span className="font-medium">Ervaring met mindfulness:</span> niet nodig

</p>

<h3 className="text-base md:text-lg font-semibold text-[#6b5e52] mb-2">

  Kosten

</h3>

<p className="text-gray-700 leading-relaxed mb-4">

  <span className="font-medium">Prijs:</span> €425,- inclusief btw per ouder-kindduo.

</p>

<p className="text-gray-700 leading-relaxed mb-4">

  De prijs is voor de volledige reeks van vijf bijeenkomsten en is inclusief

  oefeningen en eenvoudige materialen om ook thuis samen verder te oefenen.

</p>

<p className="text-gray-700 leading-relaxed mb-8">

  Wil je graag met twee kinderen uit hetzelfde gezin deelnemen? Neem dan gerust

  contact op voor de mogelijkheden.

</p>

<p className="text-gray-700 leading-relaxed">

  Een kleine investering in aandacht, verbinding en samen tijd maken voor wat er

  werkelijk toe doet.<br />

  Samen even vertragen. Samen ademhalen. Samen aanwezig zijn.

</p>

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

        
      </div>
    </section>
  );
}