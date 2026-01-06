import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ClaireIntroBlock() {
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
      className={`flex flex-col md:flex-row items-start justify-center gap-25 px-6 py-16 bg-[#f9f5f0] border-t border-[#e7dfd6] text-center md:text-left max-w-7xl mx-auto transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Afbeelding boven */}
      <div className="w-full md:w-1/3 md:order-1">
        <Image
          src="/images/foto claire 1.jpg"
          alt="Claire mindfulness trainer"
          width={600}
          height={400}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Tekstblok onder */}
      <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-start h-full">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-[#6b5e52]">
          Over Claire
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Claire is mindfulness trainer en begeleidt mensen die willen leven met
          meer aandacht, rust en bewustzijn. Haar manier van werken is
          zorgvuldig, warm en helder, met ruimte voor wat zich aandient —
          zonder oordeel en zonder haast.
          <br />
          <br />
          <a
            href="/over"
            className="font-medium underline text-[#6b5e52] hover:text-[#4a4037] transition-colors"
          >
            Lees verder →
          </a>
        </p>
      </div>
    </section>
  );
}