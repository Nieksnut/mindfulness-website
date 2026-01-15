import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    title: "Claire straalt rust uit én weet waar ze het over heeft",
    text:
      "Vanaf de eerste bijeenkomst voelde ik me op mijn gemak bij Claire. Ze is betrokken, helder en heeft een warme, rustige uitstraling die meteen vertrouwen geeft. Haar begeleiding is professioneel, maar ook menselijk en toegankelijk. De training heeft me veel gebracht: ik ervaar meer ruimte in mijn hoofd en kan beter omgaan met stresssituaties. Claire wist precies de juiste snaar te raken zonder oordeel, met oprechte aandacht.",
    author: "Marieke (32)",
  },
  {
    title: "Een jonge trainer met diepgang en oprechte aandacht",
    text:
      "Wat mij raakte aan Claire is haar openheid en de manier waarop ze de groep begeleidde: met aandacht, humor en respect. Ondanks haar jonge leeftijd brengt ze veel wijsheid en ervaring mee. Ook vind ik haar stem prettig om naar te luisteren. Ik voelde me echt gezien, ook op de momenten dat het lastig was. De stilteoefeningen en het tempo van de training waren precies goed. Ik kijk met dankbaarheid terug op deze 8 weken.",
    author: "Jeroen (45)",
  },
];

export default function ReviewsBlock() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // In Next.js dev (React Strict Mode), effects can mount/unmount twice.
    // Using refs + explicit cleanup prevents overlapping timers that can make the UI “stick”.

    // Clear any previous timers just in case
    if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);

    intervalRef.current = window.setInterval(() => {
      setVisible(false);

      // Ensure only one timeout is active
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % reviews.length);
        setVisible(true);
      }, 700); // duration of fade-out
    }, 22000);

    return () => {
      if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
      intervalRef.current = null;
      timeoutRef.current = null;
    };
  }, []);

  return (
    <section className="bg-[#f9f5f0] py-20 px-6">
      <div
        className={`max-w-3xl mx-auto text-center transition-opacity duration-700 ease-in-out min-h-[320px] md:min-h-[260px] flex flex-col justify-center ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-xl md:text-2xl font-semibold text-[#6b5e52] mb-4">
          “{reviews[index].title}”
        </h3>

        <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6">
          {reviews[index].text}
        </p>

        <p className="text-[#6b5e52] font-semibold">
           {reviews[index].author}
        </p>
      </div>
    </section>
  );
}