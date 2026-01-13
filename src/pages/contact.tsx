import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactBlock from "../components/ContactBlock";

export default function Contact() {
  return (
    <>
      <Hero />
      <Navbar />

      <main>
        <ContactBlock />
      </main>
    </>
  );
}