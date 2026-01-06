import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center bg-[#f9f5f0] py-4">
      <ul className="flex space-x-6 text-[#6b5e52] font-medium font-serif">
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
        {/* <li>
          <Link
            className="hover:text-[#4a4037] transition-colors duration-300"
            href="/training"
          >
            TRAINING
          </Link>
        </li> */}
        <li>
          <Link
            className="hover:text-[#4a4037] transition-colors duration-300"
            href="/info"
          >
            PRAKTISCH
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#4a4037] transition-colors duration-300"
            href="/aanmelden"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}