import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ReviewsBlock from "../components/ReviewsBlock";
import HOMEClaireIntroBlock from "../components/HOMEClaireIntroBlock";
import HOMEMindfulnessQuoteBlock from "../components/HOMEMindfulnessQuoteBlock";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mindfulness bij Claire | MBSR in Rijsbergen</title>
        <meta property="og:site_name" content="Mindfulness bij Claire" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Mindfulness bij Claire",
            url: "https://www.mindfulnessbijclaire.nl/",
          })}
        </script>
      </Head>
      <Hero />
      <Navbar />
      <HOMEMindfulnessQuoteBlock />
      <HOMEClaireIntroBlock />
      <ReviewsBlock />

    </div>
  );
}
