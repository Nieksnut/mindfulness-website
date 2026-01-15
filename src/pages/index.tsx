import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ReviewsBlock from "../components/ReviewsBlock";
import HOMEClaireIntroBlock from "../components/HOMEClaireIntroBlock";
import HOMEMindfulnessQuoteBlock from "../components/HOMEMindfulnessQuoteBlock";

export default function Home() {
  return (
    <div>
      <Hero />
      <Navbar />
      <HOMEMindfulnessQuoteBlock />
      <HOMEClaireIntroBlock />
      <ReviewsBlock />

    </div>
  );
}
