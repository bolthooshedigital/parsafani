import { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Phone, FileText, Code2, Server, Search, Cloud, BrainCircuit } from 'lucide-react';
import { useMousePosition } from '@/hooks/useMousePosition';
import { contactInfo } from '@/data/content';

const orbitIcons = [
  { icon: Code2, color: '#34d399', angle: 0, radius: 180 },
  { icon: Server, color: '#22d3ee', angle: 72, radius: 180 },
  { icon: Search, color: '#fbbf24', angle: 144, radius: 180 },
  { icon: Cloud, color: '#34d399', angle: 216, radius: 180 },
  { icon: BrainCircuit, color: '#22d3ee', angle: 288, radius: 180 },
];

export default function Hero() {
  const mouse = useMousePosition();
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const shapes = [
    { size: 120, color: 'from-accent-400/20 to-cyan-400/10', x: 0, y: 0, delay: '0s', duration: '8s' },
    { size: 80, color: 'from-cyan-400/20 to-accent-400/10', x: 1, y: 1, delay: '1s', duration: '10s' },
    { size: 160, color: 'from-gold-400/15 to-accent-400/10', x: -1, y: 0.5, delay: '2s', duration: '12s' },
    { size: 60, color: 'from-accent-400/25 to-cyan-400/15', x: 0.5, y: -1, delay: '0.5s', duration: '9s' },
    { size: 100, color: 'from-cyan-400/15 to-gold-400/10', x: -0.5, y: -0.5, delay: '1.5s', duration: '11s' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered grid backgrounds with parallax */}
      <div
        className="absolute inset-0 grid-bg opacity-30"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, rgba(16,185,129,0.06) 0%, transparent 40%), radial-gradient(circle at 70% 30%, rgba(34,211,238,0.06) 0%, transparent 40%)`,
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {shapes.map((shape, i) => (
          <div
            key={i}
            className={`absolute rounded-3xl bg-gradient-to-br ${shape.color} blur-2xl`}
            style={{
              width: shape.size,
              height: shape.size,
              left: `${20 + i * 15}%`,
              top: `${15 + (i % 3) * 25}%`,
              transform: `translate(${mouse.x * 40 * shape.x}px, ${mouse.y * 40 * shape.y}px)`,
              animation: `float ${shape.duration} ease-in-out infinite`,
              animationDelay: shape.delay,
            }}
          />
        ))}
      </div>

      {/* Mouse-following radial glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse 600px 400px at ${50 + mouse.x * 15}% ${50 + mouse.y * 15}%, rgba(16,185,129,0.1), transparent 50%)`,
        }}
      />

      {/* 3D Orbiting icons */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      >
        <div
          className="relative"
          style={{
            transform: `perspective(800px) rotateX(${mouse.y * 8}deg) rotateY(${mouse.x * 8}deg)`,
            transition: 'transform 0.2s ease-out',
          }}
        >
          {orbitIcons.map((item, i) => {
            const rad = (item.angle * Math.PI) / 180;
            const x = Math.cos(rad) * item.radius;
            const y = Math.sin(rad) * item.radius;
            return (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: `translate(-50%, -50%) translateZ(${Math.sin(rad) * 50}px)`,
                  animation: `float 6s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl glass flex items-center justify-center"
                  style={{ boxShadow: `0 0 20px ${item.color}30` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Sparkles className="w-4 h-4 text-accent-400" />
          <span className="text-sm text-gray-300">آماده برای پروژه‌های جدید</span>
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
        </div>

        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight transition-all duration-1000 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            transform: `perspective(1000px) rotateX(${mouse.y * 3}deg) rotateY(${mouse.x * 3}deg)`,
          }}
        >
          <span className="block text-gray-100" style={{ textShadow: '0 0 40px rgba(16,185,129,0.15)' }}>پارسا فانی</span>
          <span className="block text-gradient mt-2">توسعه‌دهنده فول‌استک</span>
        </h1>

        <p
          className={`text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          متولد ۱۳۸۰، متخصص طراحی و توسعه وب، سئو فول‌استک، دواپس، هوش مصنوعی و هاستینگ سرور.
          <br className="hidden md:block" />
          راهکارهای دیجیتال حرفه‌ای برای کسب‌وکار شما.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={() => scrollTo('#contact')}
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent-500 to-cyan-500 text-white font-semibold text-base hover:shadow-xl hover:shadow-accent-500/30 transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            مشاوره بگیرید
          </button>
          <button
            onClick={() => scrollTo('#portfolio')}
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl glass text-gray-200 font-semibold text-base hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            <FileText className="w-5 h-5 text-accent-400" />
            نمونه کارها
          </button>
        </div>

        <div
          className={`mt-12 transition-all duration-1000 delay-1000 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <a href={`tel:${contactInfo.phone}`} className="hover:text-accent-400 transition-colors">
              {contactInfo.phoneDisplay}
            </a>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>تهران، ایران</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>متولد ۱۳۸۰</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-accent-400 transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
