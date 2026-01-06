import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="flex justify-center p-20 h-[500px] text-center bg-top bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/header-bg-test2.png')" }}
    >
      <div className="z-10 flex flex-col items-center justify-start h-full text-center">
        <a href="/" className="mb-4">
          <Image
            src="/images/claire_logo_transparant.png"
            alt="Logo Claire"
            width={300}
            height={100}
          />
        </a>
      
      </div>
    </section>
  );
}