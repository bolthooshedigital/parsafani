import { useEffect, useState } from 'react';
import { GraduationCap, Users, BookOpen, Award, Clock, ArrowLeft } from 'lucide-react';
import { useTilt } from '@/hooks/useTilt';

function ClassCard3D({ src, label, sub }: { src: string; label: string; sub: string }) {
  const { ref, transform, speed } = useTilt<HTMLDivElement>({ max: 14, scale: 1.04 });
  return (
    <div ref={ref} className="relative perspective-1000 group cursor-pointer">
      <div className="relative preserve-3d" style={{ transform, transition: `transform ${speed}ms cubic-bezier(0.23, 1, 0.32, 1)` }}>
        <div className="relative rounded-3xl overflow-hidden glass-strong p-2" style={{ transform: 'translateZ(20px)' }}>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={src} alt={label} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/30 to-transparent" />
            <div className="absolute bottom-0 right-0 left-0 p-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 backdrop-blur-md border border-gold-400/30 mb-2">
                <GraduationCap className="w-3.5 h-3.5 text-gold-400" />
                <span className="text-gold-400 text-xs font-semibold">{sub}</span>
              </div>
              <h3 className="text-white font-bold text-lg">{label}</h3>
            </div>
          </div>
        </div>
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-gold-400/20 to-cyan-400/10 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}

export default function Teaching() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const show = (delay: string) => `transition-all duration-1000 ${delay} ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  const courses = [
    { title: 'توسعه وب فول‌استک با React و Node.js', level: 'متوسط تا پیشرفته', duration: '۴۸ ساعت' },
    { title: 'دواپس و CI/CD با Docker و Kubernetes', level: 'پیشرفته', duration: '۳۲ ساعت' },
    { title: 'سئو فنی و بهینه‌سازی عملکرد', level: 'متوسط', duration: '۲۴ ساعت' },
    { title: 'مبانی هوش مصنوعی و یادگیری ماشین', level: 'مقدماتی تا متوسط', duration: '۴۰ ساعت' },
  ];

  return (
    <section id="teaching" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${show('')}`}>
          <span className="inline-block px-4 py-2 rounded-full glass text-gold-400 text-sm font-semibold mb-4">تدریس و آموزش</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">انتقال <span className="text-gradient">دانش</span> به نسل بعد</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">با برگزاری دوره‌های تخصصی، تجربه‌های عملی خود را با دانشجویان به اشتراک می‌گذارم</p>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 mb-16 ${show('delay-200')}`}>
          {[
            { icon: Users, value: '۷۵+', label: 'دانشجوی موفق' },
            { icon: BookOpen, value: '۲', label: 'دوره تخصصی برگزارشده' },
            { icon: Award, value: '۹۵٪', label: 'رضایت دانشجویان' },
          ].map((s, i) => (
            <div key={i} className="glass rounded-2xl p-8 text-center hover:bg-white/5 transition-all group">
              <div className="inline-flex w-14 h-14 rounded-2xl glass items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <s.icon className="w-7 h-7 text-gold-400" />
              </div>
              <div className="text-3xl font-black text-gradient">{s.value}</div>
              <div className="text-sm text-gray-500 mt-2">{s.label}</div>
            </div>
          ))}
        </div>

        <div className={`grid md:grid-cols-2 gap-8 mb-16 ${show('delay-300')}`}>
          <ClassCard3D src="/images/class1.jpg" label="کلاس برنامه‌نویسی وب" sub="دوره جامع توسعه وب" />
          <ClassCard3D src="/images/class2.jpg" label="کارگاه دواپس و زیرساخت" sub="دوره دواپس" />
        </div>

        <div className={show('delay-500')}>
          <div className="glass rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">دوره‌های آموزشی</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {courses.map((c, i) => (
                <div key={i} className="glass rounded-2xl p-5 hover:bg-white/5 transition-all group cursor-pointer">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-base font-bold text-gray-100 leading-snug mb-2">{c.title}</h4>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 font-medium">{c.level}</span>
                        <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gold-400/10 text-gold-400 font-medium"><Clock className="w-3 h-3" />{c.duration}</span>
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-lg glass flex items-center justify-center shrink-0 group-hover:bg-gold-400 group-hover:text-ink-900 transition-all">
                      <ArrowLeft className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
