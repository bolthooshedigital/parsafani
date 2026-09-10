import { useEffect } from 'react';
import { Briefcase, GraduationCap, Award, Download, Printer, Calendar, CheckCircle2, Building2, Phone, Mail, MapPin, Globe, Cpu, BookOpen } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { experiences, education, certifications, skills, contactInfo, profile } from '@/data/content';

export default function Resume() {
  const { ref, visible } = useReveal();

  const handlePrint = () => {
    document.body.classList.add('printing-resume');
    setTimeout(() => {
      window.print();
    }, 100);
  };

  useEffect(() => {
    const cleanup = () => {
      document.body.classList.remove('printing-resume');
    };
    window.addEventListener('afterprint', cleanup);
    return () => window.removeEventListener('afterprint', cleanup);
  }, []);

  const skillCategories = [
    { label: 'فرانت‌اند', items: skills.filter(s => ['React / Next.js', 'TypeScript'].includes(s.name)) },
    { label: 'بک‌اند', items: skills.filter(s => ['Node.js / Express', 'Python / Django', 'PostgreSQL / Supabase'].includes(s.name)) },
    { label: 'دواپس', items: skills.filter(s => ['Docker / Kubernetes', 'CI/CD (GitLab, GitHub Actions)', 'AWS / Cloudflare'].includes(s.name)) },
    { label: 'سئو', items: skills.filter(s => ['سئو فنی (Technical SEO)', 'سئو محتوا و لینک‌سازی', 'Google Analytics / GSC'].includes(s.name)) },
    { label: 'زیرساخت', items: skills.filter(s => ['Linux / سرور', 'Nginx / Apache', 'هاستینگ و زیرساخت', 'امنیت وب'].includes(s.name)) },
    { label: 'هوش مصنوعی', items: skills.filter(s => ['هوش مصنوعی / ML'].includes(s.name)) },
  ];

  return (
    <>
      <section id="resume" ref={ref} className="relative py-24 px-6 overflow-hidden no-print">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`reveal ${visible ? 'visible' : ''} text-center mb-16`}>
            <span className="text-sm font-semibold text-gold-400 tracking-widest uppercase">رزومه حرفه‌ای</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-gray-100">سوابق و تجربیات</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-accent-400 rounded-full mx-auto mt-4" />
            <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
              رزومه کامل حرفه‌ای با سابقه فعالیت شرکتی، دستاوردها و گواهینامه‌های معتبر. برای دانلود نسخه PDF کلیک کنید.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent-500 to-cyan-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-accent-500/30 transition-all transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              دانلود رزومه (PDF)
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-8 py-4 rounded-xl glass text-gray-200 text-sm font-medium hover:bg-white/10 transition-all"
            >
              <Printer className="w-5 h-5" />
              نسخه چاپی
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-accent-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-100">تجربه کاری</h3>
                </div>

                <div className="relative">
                  <div className="absolute right-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-400 via-cyan-400 to-transparent" />

                  {experiences.map((exp, i) => (
                    <div
                      key={i}
                      className={`reveal ${visible ? 'visible' : ''} relative pr-14 pb-8 group`}
                      style={{ transitionDelay: `${300 + i * 150}ms` }}
                    >
                      <div className="absolute right-3 top-2 w-5 h-5 rounded-full bg-gradient-to-br from-accent-400 to-cyan-400 border-4 border-ink-900 group-hover:scale-125 transition-transform" />

                      <div className="glass-strong rounded-2xl p-6 hover:bg-white/5 transition-all duration-300">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                          <div>
                            <h4 className="text-lg font-bold text-gray-100">{exp.role}</h4>
                            <div className="flex items-center gap-2 mt-1 text-sm text-accent-400">
                              <Building2 className="w-4 h-4" />
                              {exp.company}
                            </div>
                          </div>
                          <span className="flex items-center gap-1 text-xs text-gray-500 px-3 py-1 rounded-full glass">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                        <div className="space-y-2 mb-4">
                          {exp.achievements.map((achievement, j) => (
                            <div key={j} className="flex items-start gap-2 text-sm text-gray-300">
                              <CheckCircle2 className="w-4 h-4 text-accent-400 mt-0.5 shrink-0" />
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-lg bg-accent-500/10 text-accent-300 text-xs font-medium border border-accent-500/20"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100">تحصیلات</h3>
                </div>

                <div className="space-y-4">
                  {education.map((edu, i) => (
                    <div key={i} className="glass-strong rounded-2xl p-5 hover:bg-white/5 transition-all">
                      <h4 className="text-sm font-bold text-gray-100 leading-relaxed">{edu.degree}</h4>
                      <div className="text-cyan-400 text-sm mt-1">{edu.institution}</div>
                      <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </div>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '600ms' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                    <Award className="w-5 h-5 text-gold-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100">گواهینامه‌ها</h3>
                </div>

                <div className="space-y-3">
                  {certifications.map((cert, i) => (
                    <div key={i} className="glass-strong rounded-xl p-4 hover:bg-white/5 transition-all flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gold-400/10 flex items-center justify-center shrink-0">
                        <Award className="w-4 h-4 text-gold-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-100 leading-snug">{cert.title}</h4>
                        <div className="text-xs text-gray-500 mt-1">
                          {cert.issuer} • {cert.year}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRINT-ONLY PROFESSIONAL RESUME ===== */}
      <div id="printable-resume" className="hidden print:block">
        <div className="resume-doc">
          {/* Header */}
          <div className="resume-header">
            <div className="resume-header-left">
              <h1>{profile.name}</h1>
              <p className="resume-title">{profile.headline}</p>
              <div className="resume-contact">
                <span><Phone className="ricon" /> {contactInfo.phoneDisplay}</span>
                <span><Mail className="ricon" /> {contactInfo.email}</span>
                <span><MapPin className="ricon" /> {contactInfo.location}</span>
                <span><Globe className="ricon" /> متولد {profile.birthDate} | {profile.experience}</span>
              </div>
            </div>
          </div>

          <div className="resume-divider" />

          {/* Summary */}
          <div className="resume-section">
            <h2 className="resume-section-title">درباره من</h2>
            <p className="resume-summary">
              توسعه‌دهنده فول‌استک با ۷ سال تجربه حرفه‌ای در طراحی، توسعه و استقرار سیستم‌های نرم‌افزاری مقیاس‌پذیر.
              متخصص در حوزه‌های توسعه وب، سئو فول‌استک، دواپس و زیرساخت سرور، و ادغام راهکارهای هوش مصنوعی.
              دارای سابقه فعالیت شرکتی در مقام‌های مدیریتی و فنی با دستاوردهای قابل اندازه‌گیری در بهبود عملکرد،
              کاهش هزینه‌ها و افزایش ترافیک ارگانیک. در کنار فعالیت حرفه‌ای، به تدریس و تربیت نسل جدید توسعه‌دهندگان نیز می‌پردازم.
              فارغ‌التحصیل کارشناسی ارشد مهندسی کامپیوتر از دانشگاه صنعتی شریف.
            </p>
          </div>

          {/* Experience */}
          <div className="resume-section">
            <h2 className="resume-section-title">تجربه کاری</h2>
            {experiences.map((exp, i) => (
              <div key={i} className="resume-exp">
                <div className="resume-exp-header">
                  <div>
                    <h3 className="resume-exp-role">{exp.role}</h3>
                    <p className="resume-exp-company">{exp.company}</p>
                  </div>
                  <span className="resume-exp-period">{exp.period}</span>
                </div>
                <p className="resume-exp-desc">{exp.description}</p>
                <ul className="resume-exp-achievements">
                  {exp.achievements.map((a, j) => (
                    <li key={j}>{a}</li>
                  ))}
                </ul>
                <div className="resume-exp-tech">
                  {exp.tech.map((t) => (
                    <span key={t} className="resume-tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="resume-section">
            <h2 className="resume-section-title">مهارت‌های فنی</h2>
            <div className="resume-skills-grid">
              {skillCategories.map((cat) => (
                <div key={cat.label} className="resume-skill-cat">
                  <h4 className="resume-skill-cat-title">{cat.label}</h4>
                  <div className="resume-skill-items">
                    {cat.items.map((s) => (
                      <span key={s.name} className="resume-skill-item">
                        {s.name} <em>({s.level}٪)</em>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="resume-section">
            <h2 className="resume-section-title">تحصیلات</h2>
            {education.map((edu, i) => (
              <div key={i} className="resume-edu">
                <div className="resume-edu-header">
                  <div>
                    <h3 className="resume-edu-degree">{edu.degree}</h3>
                    <p className="resume-edu-inst">{edu.institution}</p>
                  </div>
                  <span className="resume-edu-period">{edu.period}</span>
                </div>
                <p className="resume-edu-desc">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="resume-section">
            <h2 className="resume-section-title">گواهینامه‌ها و دوره‌های تخصصی</h2>
            <div className="resume-cert-grid">
              {certifications.map((cert, i) => (
                <div key={i} className="resume-cert">
                  <span className="resume-cert-title">{cert.title}</span>
                  <span className="resume-cert-issuer">{cert.issuer} — {cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Teaching */}
          <div className="resume-section">
            <h2 className="resume-section-title">تدریس و آموزش</h2>
            <div className="resume-teaching">
              <span className="resume-teaching-item"><BookOpen className="ricon" /> تدریس ۱۵ دوره تخصصی به ۲۰۰+ دانشجو</span>
              <span className="resume-teaching-item"><Cpu className="ricon" /> دوره‌های توسعه وب، دواپس، سئو و هوش مصنوعی</span>
            </div>
          </div>

          <div className="resume-footer">
            <Cpu className="ricon" />
            <span>این رزومه توسط {profile.name} تهیه شده است | {contactInfo.phoneDisplay} | {contactInfo.email}</span>
          </div>
        </div>
      </div>
    </>
  );
}
