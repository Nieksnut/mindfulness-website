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
          Ouder en kind
        </h2>

        <p className="text-gray-700 mb-4">
        <p>Samen vertragen. Samen ervaren. Samen aanwezig zijn.</p>
        <br />
        In de drukte van alledag is het soms lastig om echt even stil te staan. We zijn vaak bezig met wat er nog moet gebeuren, met school, werk, afspraken, verwachtingen en alles wat onze aandacht vraagt.
        Mindfulness kan helpen om af en toe terug te keren naar het moment van nu.
        Tijdens deze 5-weekse training gaan ouder en kind samen ontdekken wat mindfulness kan betekenen. Geen prestatie, geen moeten en geen ingewikkelde technieken. Wel samen oefenen in aandacht, nieuwsgierigheid en mildheid.        </p>

        <h3 className="text-xl font-semibold text-[#6b5e52] mt-6 mb-2">
          Wat houdt de training in?
        </h3>
        
        <p className="text-gray-700 mb-4">

        Elke week staat een ander thema centraal. We oefenen onder andere met:

        </p>

        <ul className="list-disc text-gray-700 mb-6 pl-6 space-y-2">
          <li>Aandacht voor de adem en het lichaam;</li>
          <li>bewust aanwezig zijn in het moment;</li>
          <li>gevoelens leren opmerken zonder ze meteen te hoeven veranderen;</li>
          <li>gedachten herkennen als gedachten;</li>
          <li>omgaan met spanning, boosheid of onrust;</li>
          <li>een pauze leren nemen voordat je reageert;</li>
          <li>en vooral: met aandacht samen zijn.</li>
        </ul>
        
        <p className="text-gray-700 mb-4">

        De oefeningen zijn afgestemd op kinderen en worden afgewisseld met korte meditaties, mindful bewegen, speelse oefeningen en momenten van uitwisseling.

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