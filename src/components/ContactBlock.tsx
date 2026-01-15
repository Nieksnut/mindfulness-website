import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ContactBlock() {
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
      {/* Afbeelding */}
      <div className="w-full md:w-1/3">
        <Image
          src="/images/claire2.jpeg"
          alt="Claire – mindfulness trainer"
          width={600}
          height={450}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Tekst */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-[#6b5e52]">
          Contact
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Heb je vragen over de mindfulness training, twijfel je of de training
          bij je past, of wil je even overleggen? Je bent van harte welkom om
          contact op te nemen. Ik neem graag de tijd om met je mee te kijken.
        </p>

        <div className="text-gray-700 leading-relaxed space-y-3">
          <p>
            <span className="font-medium text-[#6b5e52]">Telefoon / WhatsApp:</span>{" "}
            <a
              href="tel:0651443004"
              className="underline hover:text-[#4a4037] transition-colors"
            >
              06 51 44 30 04
            </a>
            <span className="ml-2 text-sm text-gray-600">(bellen of appen)</span>
          </p>

          <p>
            <span className="font-medium text-[#6b5e52]">E-mail:</span>{" "}
            <a
              href="mailto:claire.daamen@hotmail.com"
              className="underline hover:text-[#4a4037] transition-colors"
            >
              claire.daamen@hotmail.com
            </a>
          </p>

          <p>
            <span className="font-medium text-[#6b5e52]">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/claire-daamen"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#4a4037] transition-colors"
            >
              linkedin.com/in/claire-daamen
            </a>
          </p>

          <p>
            <span className="font-medium text-[#6b5e52]">Facebook:</span>{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61584744758260"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#4a4037] transition-colors"
            >
              facebook.com/profile.php?id=61584744758260
            </a>
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mt-6">
          Je kunt me bellen, appen of mailen op een moment dat voor jou prettig
          is. Reageer ik niet direct, dan hoor je zo snel mogelijk van me terug.
        </p>
      </div>
    </section>
  );
}