import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import TRAININGouderenkind from '../components/TRAININGouderenkind';
import TRAININGouderenkindprijs from '../components/TRAININGouderenkindprijs';

export default function OuderEnKindPagina() {
  return (
    <>
      <Hero />
      <Navbar />
      <main>
        <TRAININGouderenkind />
        <TRAININGouderenkindprijs />
      </main>
    </>
  );
}