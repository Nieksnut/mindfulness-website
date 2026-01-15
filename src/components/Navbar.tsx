import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [showSubNav, setShowSubNav] = useState(false);

  return (
    <header className="bg-[#f9f5f0] border-b border-[#e7dfd6] relative z-50">
      {/* Hoofdnavbar */}
      <nav className="flex justify-center py-4">
        <ul className="flex space-x-6 text-[#6b5e52] font-medium font-serif">
          <li>
            <Link className="hover:text-[#4a4037] transition-colors duration-300" href="/">
              HOME
            </Link>
          </li>

          <li>
            <Link className="hover:text-[#4a4037] transition-colors duration-300" href="/mindfulness">
              OVER MINDFULNESS
            </Link>
          </li>
                    <li>
            <Link className="hover:text-[#4a4037] transition-colors duration-300" href="/over">
              OVER DE TRAINER
            </Link>
          </li>

          {/* Training & Coaching (klik = subnav tonen) */}
          <li>
            <button
              type="button"
              onClick={() => setShowSubNav((v) => !v)}
              className="hover:text-[#4a4037] transition-colors duration-300"
            >
              TRAINING & COACHING ▾
            </button>
          </li>


          <li>
            <Link className="hover:text-[#4a4037] transition-colors duration-300" href="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sub-navbar (verschijnt onder de hoofdnavbar) */}
      {showSubNav && (
        <nav className="flex justify-center bg-[#f9f5f0] py-4 border-t border-[#e7dfd6]">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[#6b5e52] font-medium font-serif">
            <li>
              <Link
                className="hover:text-[#4a4037] transition-colors duration-300"
                href="/8weekse"
              >
                8-WEEKSE TRAINING (MBSR)
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#4a4037] transition-colors duration-300"
                href="/coaching"
              >
                COACHING 1-OP-1
              </Link>
            </li>
            <li>
              {/* <Link
                className="hover:text-[#4a4037] transition-colors duration-300"
                href="/RETRAITE"
              >
                STILTE RETRAITE
              </Link> */}
            </li>
            <li>
              <Link
                className="hover:text-[#4a4037] transition-colors duration-300"
                href="/bedrijven"
              >
                VOOR BEDRIJVEN
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#4a4037] transition-colors duration-300"
                href="/voorwaarden"
              >
                VOORWAARDEN
              </Link>
            </li>








          </ul>
        </nav>
      )}
    </header>
  );
}