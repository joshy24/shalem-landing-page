import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src="/shalem_logo.png"
              alt="Shalem Logo"
              className={`h-12 w-auto transition-all duration-300 ${
                isScrolled ? 'bg-white rounded-lg p-1' : 'bg-white/10 rounded-lg p-1'
              }`}
            />
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-[#0A1446]' : 'text-white'
              }`}
            >
              Shalem
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {location.pathname === '/' || location.pathname === '/categories' ? (
              <>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-[#2E8B57] ${
                    isScrolled ? 'text-[#6B7280]' : 'text-white/90'
                  }`}
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection('journey')}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-[#2E8B57] ${
                    isScrolled ? 'text-[#6B7280]' : 'text-white/90'
                  }`}
                >
                  Journey
                </button>
              </>
            ) : null}
            <Link
              to="/categories"
              className={`text-sm font-medium transition-colors duration-300 hover:text-[#2E8B57] ${
                isScrolled ? 'text-[#6B7280]' : 'text-white/90'
              }`}
            >
              Categories
            </Link>
            <a
              href="https://forms.gle/75qqxQjGcgcWA51E9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2E8B57] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#267347] transition-colors duration-300"
            >
              Apply
            </a>
          </div>

          <div className="md:hidden">
            <a
              href="https://forms.gle/75qqxQjGcgcWA51E9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2E8B57] text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
