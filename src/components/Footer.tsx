export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#f9f5f0] border-t border-[#e7dfd6] mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div>
            <p className="text-[#6b5e52] font-semibold text-lg">
              Mindfulness bij Claire
            </p>
            <p className="text-gray-700 mt-2">
              Rust, aandacht en helderheid in het dagelijks leven.
            </p>
          </div>

          <nav className="flex gap-6 text-[#6b5e52] font-medium">
            <a className="hover:text-[#4a4037] transition-colors" href="/mindfulness">
              Over mindfulness
            </a>
            <a className="hover:text-[#4a4037] transition-colors" href="/trainingencoaching">
              Training
            </a>
            <a className="hover:text-[#4a4037] transition-colors" href="/contact">
              Contact
            </a>
          </nav>
        </div>

        <p className="text-gray-600 mt-8 text-sm">
          © {year} Mindfulness met Claire • Alle rechten voorbehouden
        </p>
      </div>
    </footer>
  );
}