import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative z-50 flex justify-center bg-[#f9f5f0] py-4 border-t border-[#e7dfd6]">
      <ul className="flex space-x-8 text-[#6b5e52] font-medium font-serif tracking-wide">
        <li>
          <Link
            href="/mindfulness"
            className="hover:text-[#4a4037] transition-colors duration-300"
          >
            OVER MINDFULNESS
          </Link>
        </li>

        <li>
          <Link
            href="/over"
            className="hover:text-[#4a4037] transition-colors duration-300"
          >
            OVER DE TRAINER
          </Link>
        </li>

        <li>
          <Link
            href="/trainingencoaching"
            className="hover:text-[#4a4037] transition-colors duration-300"
          >
            TRAINING &amp; COACHING
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className="hover:text-[#4a4037] transition-colors duration-300"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}