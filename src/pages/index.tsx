import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MindfulnessQuoteBlock from "../components/MindfulnessQuoteBlock";
import ClaireIntroBlock from "../components/ClaireIntroBlock";
import ReviewsBlock from "../components/ReviewsBlock";

export default function Home() {
  return (
    <div>
      <Hero />
      <Navbar />
      <MindfulnessQuoteBlock />
      <ClaireIntroBlock />
      <ReviewsBlock />

    </div>
  );
}
