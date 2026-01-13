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
      className={`flex justify-center px-6 py-16 bg-[#f9f5f0] border-t border-[#e7dfd6] text-center md:text-left max-w-7xl mx-auto transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-full flex flex-col justify-center md:justify-start h-full">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-[#6b5e52]">
          Contact
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
          Heb je vragen over de mindfulness training, twijfel je of de training
          bij je past, of wil je even overleggen? Je bent van harte welkom om
          contact op te nemen. Ik neem graag de tijd om met je mee te kijken.
        </p>

        <div className="text-gray-700 leading-relaxed space-y-2">
          <p>
            <span className="font-medium text-[#6b5e52]">Telefoon / WhatsApp:</span>{" "}
            <a
              href="tel:0612345678"
              className="underline hover:text-[#4a4037] transition-colors"
            >
              06 12 34 56 78
            </a>
            <span className="ml-2 text-sm text-gray-600">(bellen of appen)</span>
          </p>

          <p>
            <span className="font-medium text-[#6b5e52]">E-mail:</span>{" "}
            <a
              href="mailto:info@mindfulnessbijclaire.nl"
              className="underline hover:text-[#4a4037] transition-colors"
            >
              info@mindfulnessbijclaire.nl
            </a>
          </p>

          <p>
            <span className="font-medium text-[#6b5e52]">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#4a4037] transition-colors"
            >
              linkedin.com/in/placeholder
            </a>
          </p>

          <p>
            <span className="font-medium text-[#6b5e52]">Facebook:</span>{" "}
            <a
              href="https://www.facebook.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#4a4037] transition-colors"
            >
              facebook.com/placeholder
            </a>
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mt-6 max-w-3xl">
          Je kunt me bellen of mailen op een moment dat voor jou prettig is.
          Reageer ik niet direct, dan hoor je zo snel mogelijk van me terug.
        </p>
      </div>
    </section>
  );
}