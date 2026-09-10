import { Code2, Phone, Mail, Heart } from 'lucide-react';
import { contactInfo, socialLinks, navLinks } from '@/data/content';

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 py-12 px-6 no-print">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 to-cyan-400 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-ink-900" />
              </div>
              <span className="text-lg font-bold text-gradient">پارسا فانی</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              توسعه‌دهنده فول‌استک و متخصص سئو، دواپس، هوش مصنوعی و هاستینگ سرور.
              راهکارهای دیجیتال حرفه‌ای برای کسب‌وکار شما.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-300 mb-4">دسترسی سریع</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-sm text-gray-500 hover:text-accent-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-300 mb-4">راه‌های ارتباطی</h4>
            <div className="flex flex-col gap-3 mb-4">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-sm text-gray-500 hover:text-accent-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span dir="ltr">{contactInfo.phoneDisplay}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-sm text-gray-500 hover:text-accent-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span dir="ltr">{contactInfo.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:scale-110 transition-transform"
                  style={{ color: social.color }}
                  title={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © ۱۴۰۵ پارسا فانی. تمام حقوق محفوظ است.
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-1.5">
            ساخته شده با
            <Heart className="w-4 h-4 text-accent-400 fill-accent-400" />
            و کد تمیز
          </p>
        </div>
      </div>
    </footer>
  );
}
