import { GraduationCap, BookOpen, Users, Award, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { useTilt } from '@/hooks/useTilt';

const teachingPhotos = [
  { src: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'کلاس برنامه‌نویسی' },
  { src: 'https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'کارگاه عملی' },
  { src: 'https://images.pexels.com/photos/18935831/pexels-photo-18935831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'جلسه تخصصی' },
];

const teachingStats = [
  { icon: Users, value: '۲۰۰+', label: 'دانشجو' },
  { icon: BookOpen, value: '۱۵', label: 'دوره آموزشی' },
  { icon: Award, value: '۹۸٪', label: 'رضایت دانشجویان' },
];

const courses = [
  { title: 'توسعه وب فول‌استک با React و Node.js', level: 'متوسط تا پیشرفته', duration: '۴۸ ساعت' },
  { title: 'دواپس و CI/CD با Docker و Kubernetes', level: 'پیشرفته', duration: '۳۲ ساعت' },
  { title: 'سئو فنی و بهینه‌سازی عملکرد', level: 'متوسط', duration: '۲۴ ساعت' },
  { title: 'مبانی هوش مصنوعی و یادگیری ماشین', level: 'مقدماتی تا متوسط', duration: '۴۰ ساعت' },
];

function PhotoCard({ src, label, index }: { src: string; label: string; index: number }) {
  const { ref: revealRef, visible } = useReveal();
  const { ref: tiltRef, transform, speed } = useTilt<HTMLDivElement>({ max: 14, scale: 1.04 });

  return (
    <div
      ref={revealRef}
      className={`reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div ref={tiltRef} className="relative perspective-1000 cursor-pointer group">
        <div
          className="relative preserve-3d transition-transform"
          style={{ transform, transition: `transform ${speed}ms cubic-bezier(0.23, 1, 0.32, 1)` }}
        >
          <div className="relative rounded-2xl overflow-hidden glass-strong p-2" style={{ transform: 'translateZ(20px)' }}>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <img
                src={src}
                alt={label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-sm font-bold text-gray-100">{label}</span>
              </div>
            </div>
          </div>
          <div
            className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent-400/20 to-cyan-400/10 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </div>
    </div>
  );
}

export default function Teaching() {
  const { ref, visible } = useReveal();

  return (
    <section id="teaching" ref={ref} className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-16`}>
          <span className="text-sm font-semibold text-cyan-400 tracking-widest uppercase">تدریس و آموزش</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 text-gray-100">مسیر آموزشی من</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-gold-400 rounded-full mx-auto mt-4" />
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            علاوه بر فعالیت حرفه‌ای، به تربیت نسل بعدی توسعه‌دهندگان نیز علاقه‌مندم و دوره‌های تخصصی برگزار می‌کنم
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {teachingStats.map((stat, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'visible' : ''} glass-strong rounded-2xl p-8 text-center hover:bg-white/5 transition-all`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="inline-flex w-14 h-14 rounded-2xl glass items-center justify-center mb-4">
                <stat.icon className="w-7 h-7 text-cyan-400" />
              </div>
              <div className="text-3xl font-black text-gradient">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teachingPhotos.map((photo, i) => (
            <PhotoCard key={i} src={photo.src} label={photo.label} index={i} />
          ))}
        </div>

        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '500ms' }}>
          <div className="glass-strong rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-100">دوره‌های آموزشی</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {courses.map((course, i) => (
                <div
                  key={i}
                  className="glass rounded-2xl p-5 hover:bg-white/5 transition-all group cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-base font-bold text-gray-100 leading-snug mb-2">{course.title}</h4>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 font-medium">{course.level}</span>
                        <span className="px-2.5 py-1 rounded-lg bg-gold-400/10 text-gold-400 font-medium">{course.duration}</span>
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-lg glass flex items-center justify-center shrink-0 group-hover:bg-accent-500 group-hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
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
