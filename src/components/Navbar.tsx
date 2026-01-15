import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [showSubNav, setShowSubNav] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="bg-[#f9f5f0] border-b border-[#e7dfd6] relative z-50">
      {/* Responsive navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center relative">
          {/* Left: Home / brand link */}
          <Link
            className="hidden md:inline absolute left-0 text-[#6b5e52] font-medium font-serif hover:text-[#4a4037] transition-colors duration-300"
            href="/"
            onClick={() => {
              closeMobile();
              setShowSubNav(false);
            }}
          >
            HOME
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden absolute right-0 text-[#6b5e52] font-medium hover:text-[#4a4037] transition-colors duration-300"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6 text-[#6b5e52] font-medium font-serif">
            <li>
              <Link
                className="hover:text-[#4a4037] transition-colors duration-300"
                href="/mindfulness"
              >
                OVER MINDFULNESS
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-[#4a4037] transition-colors duration-300"
                href="/over"
              >
                OVER DE TRAINER
              </Link>
            </li>

            {/* Training & Coaching (klik = subnav tonen) */}
            <li>
              <button
                type="button"
                onClick={() => setShowSubNav((v) => !v)}
                className="hover:text-[#4a4037] transition-colors duration-300"
                aria-expanded={showSubNav}
              >
                TRAINING & COACHING ▾
              </button>
            </li>

            <li>
              <Link
                className="hover:text-[#4a4037] transition-colors duration-300"
                href="/contact"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden mt-4 border-t border-[#e7dfd6] pt-4">
            <ul className="flex flex-col gap-3 text-[#6b5e52] font-medium font-serif">
              <li>
                <Link
                  className="hover:text-[#4a4037] transition-colors duration-300"
                  href="/mindfulness"
                  onClick={() => {
                    closeMobile();
                    setShowSubNav(false);
                  }}
                >
                  OVER MINDFULNESS
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#4a4037] transition-colors duration-300"
                  href="/over"
                  onClick={() => {
                    closeMobile();
                    setShowSubNav(false);
                  }}
                >
                  OVER DE TRAINER
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setShowSubNav((v) => !v)}
                  className="text-left hover:text-[#4a4037] transition-colors duration-300"
                  aria-expanded={showSubNav}
                >
                  TRAINING & COACHING {showSubNav ? "▴" : "▾"}
                </button>

                {showSubNav && (
                  <ul className="mt-3 ml-3 pl-4 border-l border-[#e7dfd6] flex flex-col gap-3 text-[#6b5e52] font-medium font-serif">
                    <li>
                      <Link
                        className="hover:text-[#4a4037] transition-colors duration-300"
                        href="/8weekse"
                        onClick={() => {
                          closeMobile();
                          setShowSubNav(false);
                        }}
                      >
                        8-WEEKSE TRAINING (MBSR)
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-[#4a4037] transition-colors duration-300"
                        href="/coaching"
                        onClick={() => {
                          closeMobile();
                          setShowSubNav(false);
                        }}
                      >
                        COACHING 1-OP-1
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-[#4a4037] transition-colors duration-300"
                        href="/bedrijven"
                        onClick={() => {
                          closeMobile();
                          setShowSubNav(false);
                        }}
                      >
                        VOOR BEDRIJVEN
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-[#4a4037] transition-colors duration-300"
                        href="/voorwaarden"
                        onClick={() => {
                          closeMobile();
                          setShowSubNav(false);
                        }}
                      >
                        VOORWAARDEN
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  className="hover:text-[#4a4037] transition-colors duration-300"
                  href="/contact"
                  onClick={() => {
                    closeMobile();
                    setShowSubNav(false);
                  }}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Sub-navbar (verschijnt onder de hoofdnavbar) */}
      {showSubNav && !mobileOpen && (
        <nav className="flex justify-center bg-[#f9f5f0] py-4 border-t border-[#e7dfd6]">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[#6b5e52] font-medium font-serif">
            <li>
              <Link
                className="hover:text-[#4a4037] transition-colors duration-300"
                href="/8weekse"
                onClick={() => {
                  closeMobile();
                  setShowSubNav(false);
                }}
              >
                8-WEEKSE TRAINING (MBSR)
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#4a4037] transition-colors duration-300"
                href="/coaching"
                onClick={() => {
                  closeMobile();
                  setShowSubNav(false);
                }}
              >
                COACHING 1-OP-1
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#4a4037] transition-colors duration-300"
                href="/bedrijven"
                onClick={() => {
                  closeMobile();
                  setShowSubNav(false);
                }}
              >
                VOOR BEDRIJVEN
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#4a4037] transition-colors duration-300"
                href="/voorwaarden"
                onClick={() => {
                  closeMobile();
                  setShowSubNav(false);
                }}
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