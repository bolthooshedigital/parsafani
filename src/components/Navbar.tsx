import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { navLinks } from '@/data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 no-print ${
        scrolled ? 'glass-strong py-3 shadow-lg shadow-black/50' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleClick(e, '#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 to-cyan-400 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <Code2 className="w-5 h-5 text-ink-900" />
          </div>
          <span className="text-lg font-bold text-gradient">پارسا فانی</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-accent-400 transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(e) => handleClick(e, '#contact')}
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-500 to-cyan-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-accent-500/30 transition-all duration-300 transform hover:scale-105"
        >
          مشاوره بگیرید
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-gray-300"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-2 glass-strong mt-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-accent-400 hover:bg-white/5 rounded-lg transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
