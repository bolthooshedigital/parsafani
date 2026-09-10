import { Phone } from 'lucide-react';
import { Glasses, User, MapPin, Calendar, Briefcase } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { useCounter } from '@/hooks/useCounter';
import { useTilt } from '@/hooks/useTilt';
import { stats, contactInfo } from '@/data/content';

function StatItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { ref, count } = useCounter(stat.value);
  return (
    <div
      className="text-center reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="inline-flex w-12 h-12 rounded-2xl glass items-center justify-center mb-3">
        <stat.icon className="w-6 h-6 text-accent-400" />
      </div>
      <div className="text-3xl md:text-4xl font-black text-gradient">
        <span ref={ref}>{count}</span>
        {stat.suffix}
      </div>
      <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
    </div>
  );
}

export default function About() {
  const { ref: sectionRef, visible } = useReveal();
  const { ref: cardRef, transform, speed } = useTilt<HTMLDivElement>({ max: 10, scale: 1.02 });

  return (
    <section id="about" ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-16`}>
          <span className="text-sm font-semibold text-accent-400 tracking-widest uppercase">درباره من</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 text-gray-100">آشنایی با پارسا</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-400 to-cyan-400 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={cardRef}
            className={`reveal ${visible ? 'visible' : ''} relative perspective-1000`}
            style={{ transitionDelay: '200ms' }}
          >
            <div
              className="relative preserve-3d transition-transform"
              style={{ transform, transition: `transform ${speed}ms cubic-bezier(0.23, 1, 0.32, 1)` }}
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-400/20 via-cyan-400/10 to-gold-400/15 rounded-3xl blur-2xl" />

                <div className="relative glass-strong rounded-3xl p-8 h-full flex flex-col items-center justify-center glow-green">
                  <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-ink-600 to-ink-800 flex items-center justify-center mb-6 border-2 border-accent-400/30 overflow-hidden" style={{ transform: 'translateZ(40px)' }}>
                    <div className="absolute inset-0 rounded-full bg-accent-400/10 animate-pulse-glow z-10 pointer-events-none" />
                    <img
                      src="https://images.pexels.com/photos/5483063/pexels-photo-5483063.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      alt="توسعه‌دهنده در حال کار"
                      className="w-full h-full object-cover object-top"
                    />

                    <div className="absolute inset-0 rounded-full ring-2 ring-accent-400/20" />

                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center z-20" style={{ transform: 'translateZ(30px)' }}>
                      <Glasses className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-100" style={{ transform: 'translateZ(30px)' }}>پارسا فانی</h3>
                  <p className="text-sm text-accent-400 mt-1" style={{ transform: 'translateZ(20px)' }}>توسعه‌دهنده فول‌استک</p>

                  <div className="flex items-center gap-4 mt-4 text-xs text-gray-500" style={{ transform: 'translateZ(15px)' }}>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> تهران
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> متولد ۱۳۸۰
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3" /> ۷+ سال
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-6 leading-relaxed">
              من برنامه‌نویسم که <span className="text-gradient-green">ایده‌ها را به واقعیت تبدیل می‌کند</span>
            </h3>
            <p className="text-gray-400 leading-loose mb-6 text-lg">
              متولد اردیبهشت ۱۳۸۰ هستم و بیش از ۷ سال است که در دنیای تکنولوژی فعالیت می‌کنم. مسیر حرفه‌ای من از
              توسعه وب‌سایت‌های ساده شروع شد و امروز به طراحی و پیاده‌سازی سیستم‌های مقیاس‌پذیر،
              زیرساخت‌های ابری و راهکارهای هوش مصنوعی رسیده است.
            </p>
            <p className="text-gray-400 leading-loose mb-8 text-lg">
              تخصص من در سه حوزه کلیدی است: <span className="text-accent-400 font-semibold">توسعه وب فول‌استک</span>،
              <span className="text-gold-400 font-semibold"> سئو و بهینه‌سازی</span> و
              <span className="text-cyan-400 font-semibold"> دواپس و زیرساخت</span>.
              در کنار این‌ها، با ادغام هوش مصنوعی در محصولات دیجیتال، ارزش‌آفرینی می‌کنم.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, i) => (
                <StatItem key={stat.label} stat={stat} index={i} />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 px-5 py-3 rounded-xl glass text-gray-200 text-sm font-medium hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4 text-accent-400" />
                {contactInfo.phoneDisplay}
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-accent-500 to-cyan-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-accent-500/30 transition-all"
              >
                <User className="w-4 h-4" />
                همکاری با من
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
