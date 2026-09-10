import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('#home')}
          className="flex items-center gap-3 group"
        >
          <div className="relative">
            <img
              src="/images/logo.jpg"
              alt="پارسا فانی"
              className="w-11 h-11 rounded-xl object-cover border-2 border-accent-400/30 group-hover:border-accent-400 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-xl bg-accent-400/0 group-hover:bg-accent-400/10 transition-all duration-300" />
          </div>
          <div className="text-right hidden sm:block">
            <div className="text-base font-black text-white leading-tight">پارسا فانی</div>
            <div className="text-xs text-accent-400">Full-Stack Developer</div>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollTo('#contact')}
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-500 to-cyan-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-accent-500/30 transition-all"
        >
          تماس بگیرید
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center glass rounded-lg"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-strong mt-3 mx-6 rounded-2xl p-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-right px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="w-full mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-accent-500 to-cyan-500 text-white font-semibold"
          >
            تماس بگیرید
          </button>
        </div>
      )}
    </nav>
  );
}
