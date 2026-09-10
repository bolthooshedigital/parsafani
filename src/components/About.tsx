import { useEffect, useState } from 'react';
import { Briefcase } from 'lucide-react';
import { profile, stats } from '@/data/content';
import { useTilt } from '@/hooks/useTilt';

function Tile3D({ src, alt, label, sub, big }: { src: string; alt: string; label: string; sub?: string; big?: boolean }) {
  const { ref, transform, speed } = useTilt<HTMLDivElement>({ max: 12, scale: 1.05 });
  return (
    <div ref={ref} className={`relative perspective-1000 group ${big ? 'col-span-2 row-span-2' : ''}`}>
      <div className="relative preserve-3d h-full" style={{ transform, transition: `transform ${speed}ms cubic-bezier(0.23, 1, 0.32, 1)` }}>
        <div className={`relative rounded-2xl overflow-hidden glass-strong p-1.5 h-full ${big ? 'aspect-[4/5]' : 'aspect-square'}`} style={{ transform: 'translateZ(20px)' }}>
          <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-1.5 rounded-xl bg-gradient-to-t from-ink-900/90 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 right-4 left-4">
            <div className="text-white font-bold text-sm md:text-base">{label}</div>
            {sub && <div className="text-accent-400 text-xs mt-0.5">{sub}</div>}
          </div>
        </div>
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent-400/25 to-cyan-400/15 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}

export default function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const show = (delay: string) => `transition-all duration-1000 ${delay} ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${show('')}`}>
          <span className="inline-block px-4 py-2 rounded-full glass text-accent-400 text-sm font-semibold mb-4">درباره من</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">یک <span className="text-gradient">توسعه‌دهنده</span> با اشتیاق</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">{profile.headline}</p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 ${show('delay-200')}`}>
          <Tile3D big src="/images/parsa-desk.jpg" alt="پارسا فانی در حال کار" label="در حال کار" sub="مدیر فنی — هوش دیجیتال" />
          <Tile3D src="/images/team1.jpg" alt="تیم توسعه" label="تیم توسعه" sub="هوش دیجیتال" />
          <Tile3D src="/images/team2.jpg" alt="جلسه تیم" label="جلسه تیم" sub="برنامه‌ریزی پروژه" />
          <Tile3D src="/images/parsa-portrait.jpg" alt="پارسا فانی" label="پارسا فانی" sub="توسعه‌دهنده فول‌استک" />
          <Tile3D src="/images/logo.jpg" alt="لوگو هوش دیجیتال" label="هوش دیجیتال" sub="برند ما" />
        </div>

        <div className={`max-w-3xl mx-auto text-center mb-16 space-y-4 ${show('delay-300')}`}>
          <h3 className="text-3xl font-bold text-white">سلام! من <span className="text-gradient">{profile.name}</span> هستم</h3>
          <p className="text-gray-300 leading-relaxed text-lg">متولد ۵ اردیبهشت ۱۳۸۰، با بیش از ۷ سال تجربه در توسعه وب، سئو فول‌استک، دواپس و هوش مصنوعی.</p>
          <div className="flex flex-wrap gap-2 justify-center pt-2">
            {['React', 'Node.js', 'Docker', 'Kubernetes', 'AWS', 'Python', 'TypeScript'].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full glass text-accent-400 text-sm font-medium border border-accent-400/20">{t}</span>
            ))}
          </div>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 ${show('delay-500')}`}>
          {stats.map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-6 text-center group hover:bg-white/5 transition-all">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent-400/20 to-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <stat.icon className="w-7 h-7 text-accent-400" />
              </div>
              <div className="text-4xl font-black text-gradient mb-2">{stat.value}{stat.suffix}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className={show('delay-700')}>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Briefcase className="w-6 h-6 text-accent-400" />
            <h3 className="text-2xl font-bold text-white">ارزش‌های کاری من</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'دقت و کیفیت', desc: 'توجه به جزئیات و ارائه کد تمیز', color: '#34d399' },
              { title: 'سرعت و کارایی', desc: 'بهینه‌سازی برای بهترین عملکرد', color: '#22d3ee' },
              { title: 'همکاری تیمی', desc: 'ارتباط موثر با مشتریان و تیم', color: '#fbbf24' },
              { title: 'یادگیری مداوم', desc: 'به‌روز بودن با جدیدترین تکنولوژی‌ها', color: '#34d399' },
            ].map((v, i) => (
              <div key={i} className="glass rounded-2xl p-6 hover:bg-white/5 transition-all group">
                <div className="w-3 h-3 rounded-full mb-4" style={{ background: v.color }} />
                <h4 className="text-white font-bold mb-2">{v.title}</h4>
                <p className="text-gray-400 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
