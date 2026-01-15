
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import TRAINING8weekse from '../components/TRAINING8weekse';
import TRAINING8weekseprijs from '@/components/TRAINING8weekseprijs';


export default function Over() {
  return (
    <>
      <Hero />
      <Navbar />
      <main>
   
        <TRAINING8weekse />
        <TRAINING8weekseprijs />
   
      </main>
    </>
  );
}