import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import TRAININGbedrijven from '@/components/TRAININGbedrijven';
import TRAININGBedrijvenprijs from '@/components/TRAININGBedrijvenprijs';

export default function Over() {
  return (
    <>
      <Hero />
      <Navbar />
      <main>
       
        
       <TRAININGbedrijven />
       <TRAININGBedrijvenprijs />
      </main>
    </>
  );
}