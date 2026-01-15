import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import CoachingBlock from '../components/CoachingBlock';
import TRAININGCoachingprijs from '@/components/TRAININGCoachingprijs';


export default function Over() {
  return (
    <>
      <Hero />
      <Navbar />
      <main>

        <CoachingBlock />
        <TRAININGCoachingprijs />
       
      </main>
    </>
  );
}