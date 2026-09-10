import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { useTilt } from '@/hooks/useTilt';
import { contactInfo, socialLinks } from '@/data/content';
import { supabase } from '@/lib/supabase';

const services = [
  'طراحی و توسعه وب',
  'سئو فول‌استک',
  'دواپس و CI/CD',
  'هوش مصنوعی',
  'هاستینگ و سرور',
  'بهینه‌سازی عملکرد',
  'مشاوره عمومی',
];

export default function Contact() {
  const { ref, visible } = useReveal();
  const { ref: cardRef, transform, speed } = useTilt<HTMLDivElement>({ max: 6, scale: 1.01 });

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: services[0],
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setStatus('error');
      setErrorMsg('نام و شماره تماس الزامی است');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('consultation_requests').insert({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || null,
        service: form.service,
        message: form.message.trim() || null,
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', phone: '', email: '', service: services[0], message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setErrorMsg('ارسال درخواست ناموفق بود. لطفاً مستقیم تماس بگیرید.');
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-16`}>
          <span className="text-sm font-semibold text-accent-400 tracking-widest uppercase">تماس با من</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 text-gray-100">درخواست مشاوره</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-400 to-cyan-400 rounded-full mx-auto mt-4" />
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            فرم زیر را پر کنید تا در اسرع وقت با شما تماس بگیرم. یا مستقیم از راه‌های ارتباطی زیر اقدام کنید.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className={`reveal ${visible ? 'visible' : ''} lg:col-span-2 space-y-4`} style={{ transitionDelay: '200ms' }}>
            <a
              href={`tel:${contactInfo.phone}`}
              className="block glass-strong rounded-2xl p-5 hover:bg-white/5 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-500/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">تماس مستقیم</div>
                  <div className="text-lg font-bold text-gray-100" dir="ltr">{contactInfo.phoneDisplay}</div>
                </div>
              </div>
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              className="block glass-strong rounded-2xl p-5 hover:bg-white/5 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">ایمیل</div>
                  <div className="text-sm font-bold text-gray-100" dir="ltr">{contactInfo.email}</div>
                </div>
              </div>
            </a>

            <div className="glass-strong rounded-2xl p-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-400/15 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">موقعیت</div>
                  <div className="text-sm font-bold text-gray-100">{contactInfo.location}</div>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-5">
              <div className="text-sm text-gray-400 mb-4">شبکه‌های اجتماعی</div>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:scale-110 transition-transform"
                    style={{ color: social.color }}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={cardRef}
            className={`reveal ${visible ? 'visible' : ''} lg:col-span-3 perspective-1000`}
            style={{ transitionDelay: '400ms' }}
          >
            <div
              className="preserve-3d transition-transform"
              style={{ transform, transition: `transform ${speed}ms cubic-bezier(0.23, 1, 0.32, 1)` }}
            >
              <form
                onSubmit={handleSubmit}
                className="glass-strong rounded-3xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">نام و نام خانوادگی *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-ink-800 border border-white/10 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-accent-400/50 focus:ring-1 focus:ring-accent-400/30 transition-all"
                      placeholder="نام شما"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">شماره تماس *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-ink-800 border border-white/10 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-accent-400/50 focus:ring-1 focus:ring-accent-400/30 transition-all"
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                      required
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">ایمیل (اختیاری)</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-ink-800 border border-white/10 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-accent-400/50 focus:ring-1 focus:ring-accent-400/30 transition-all"
                      placeholder="email@example.com"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">خدمت مورد نظر</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-ink-800 border border-white/10 text-gray-100 focus:outline-none focus:border-accent-400/50 focus:ring-1 focus:ring-accent-400/30 transition-all"
                    >
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-ink-800">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">توضیحات (اختیاری)</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-ink-800 border border-white/10 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-accent-400/50 focus:ring-1 focus:ring-accent-400/30 transition-all resize-none"
                    placeholder="پروژه یا نیاز خود را توضیح دهید..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-accent-500 to-cyan-500 text-white font-semibold text-base hover:shadow-xl hover:shadow-accent-500/30 transition-all transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' && (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      در حال ارسال...
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      درخواست شما ارسال شد!
                    </>
                  )}
                  {status === 'idle' && (
                    <>
                      <Send className="w-5 h-5" />
                      ارسال درخواست مشاوره
                    </>
                  )}
                  {status === 'error' && (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      تلاش مجدد
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="flex items-center gap-2 text-sm text-accent-400 bg-accent-500/10 rounded-xl p-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    درخواست مشاوره شما با موفقیت ثبت شد. به‌زودی با شما تماس می‌گیرم.
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 rounded-xl p-3">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    {errorMsg}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
