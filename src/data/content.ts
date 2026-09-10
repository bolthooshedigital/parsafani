import {
  Code2,
  Search,
  Server,
  BrainCircuit,
  Cloud,
  Globe,
  ShoppingCart,
  Database,
  GitBranch,
  Container,
  Cpu,
  Gauge,
  ShieldCheck,
  Terminal,
  Layers,
  Rocket,
  type LucideIcon,
  Send,
  Instagram,
  Github,
  Linkedin,
} from 'lucide-react';

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: number;
  color: string;
}

export interface ServiceCard {
  title: string;
  icon: LucideIcon;
  description: string;
  details: string[];
  color: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface Project {
  title: string;
  category: string;
  categoryKey: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  result: string;
  icon: LucideIcon;
  color: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
}

export const stats: Stat[] = [
  { label: 'سال تجربه', value: 7, suffix: '+', icon: Rocket },
  { label: 'پروژه تحویل‌شده', value: 120, suffix: '+', icon: Layers },
  { label: 'مشتری راضی', value: 85, suffix: '+', icon: ShieldCheck },
  { label: 'تکنولوژی مسلط', value: 40, suffix: '+', icon: Cpu },
];

export const skills: Skill[] = [
  { name: 'React / Next.js', icon: Code2, level: 95, color: '#34d399' },
  { name: 'TypeScript', icon: Code2, level: 92, color: '#22d3ee' },
  { name: 'Node.js / Express', icon: Server, level: 90, color: '#34d399' },
  { name: 'Python / Django', icon: Code2, level: 85, color: '#fbbf24' },
  { name: 'PostgreSQL / Supabase', icon: Database, level: 90, color: '#22d3ee' },
  { name: 'Docker / Kubernetes', icon: Container, level: 88, color: '#34d399' },
  { name: 'CI/CD (GitLab, GitHub Actions)', icon: GitBranch, level: 87, color: '#22d3ee' },
  { name: 'سئو فنی (Technical SEO)', icon: Search, level: 93, color: '#fbbf24' },
  { name: 'سئو محتوا و لینک‌سازی', icon: Search, level: 90, color: '#34d399' },
  { name: 'Google Analytics / GSC', icon: Gauge, level: 91, color: '#22d3ee' },
  { name: 'Linux / سرور', icon: Terminal, level: 89, color: '#34d399' },
  { name: 'Nginx / Apache', icon: Server, level: 86, color: '#fbbf24' },
  { name: 'هاستینگ و زیرساخت', icon: Cloud, level: 87, color: '#22d3ee' },
  { name: 'هوش مصنوعی / ML', icon: BrainCircuit, level: 82, color: '#34d399' },
  { name: 'AWS / Cloudflare', icon: Cloud, level: 84, color: '#22d3ee' },
  { name: 'امنیت وب', icon: ShieldCheck, level: 85, color: '#fbbf24' },
];

export const services: ServiceCard[] = [
  {
    title: 'طراحی و توسعه وب',
    icon: Globe,
    description: 'ساخت وب‌سایت‌های مدرن، سریع و واکنش‌گرا با جدیدترین تکنولوژی‌ها',
    details: [
      'طراحی UI/UX حرفه‌ای و ریسپانسیو',
      'توسعه فرانت‌اند با React و Next.js',
      'توسعه بک‌اند با Node.js و Python',
      'بهینه‌سازی سرعت بارگذاری Core Web Vitals',
    ],
    color: '#34d399',
  },
  {
    title: 'سئو فول‌استک',
    icon: Search,
    description: 'بهینه‌سازی کامل سایت برای موتورهای جستجو و افزایش ترافیک ارگانیک',
    details: [
      'سئو فنی و اصلاح ساختار سایت',
      'تحقیق کلمات کلیدی و استراتژی محتوا',
      'لینک‌سازی داخلی و خارجی',
      'گزارش‌گیری و تحلیل با Google Analytics',
    ],
    color: '#fbbf24',
  },
  {
    title: 'دواپس و CI/CD',
    icon: GitBranch,
    description: 'اتوماسیون فرآیند توسعه، تست و استقرار با پایپ‌لاین‌های مدرن',
    details: [
      'راه‌اندازی Docker و Kubernetes',
      'پایپ‌لاین CI/CD با GitHub Actions',
      'مانیتورینگ و لاگینگ با Prometheus',
      'استقرار خودکار و Blue-Green Deployment',
    ],
    color: '#22d3ee',
  },
  {
    title: 'هوش مصنوعی',
    icon: BrainCircuit,
    description: 'ادغام راهکارهای هوش مصنوعی و یادگیری ماشین در کسب‌وکار شما',
    details: [
      'ادغام ChatGPT و LLM در محصولات',
      'سیستم‌های توصیه‌گر شخصی‌سازی‌شده',
      'پردازش زبان طبیعی (NLP) فارسی',
      'اتوماسیون فرآیندها با AI',
    ],
    color: '#34d399',
  },
  {
    title: 'هاستینگ و سرور',
    icon: Cloud,
    description: 'راه‌اندازی، مدیریت و بهینه‌سازی زیرساخت سرور و هاستینگ',
    details: [
      'پیکربندی Nginx و Load Balancer',
      'مدیریت سرورهای لینوکسی',
      'SSL، امنیت و فایروال',
      'بک‌آپ‌گیری خودکار و مانیتورینگ آپ‌تایم',
    ],
    color: '#22d3ee',
  },
  {
    title: 'بهینه‌سازی عملکرد',
    icon: Gauge,
    description: 'افزایش سرعت و کارایی وب‌سایت‌ها و سرویس‌های آنلاین',
    details: [
      'بهینه‌سازی Core Web Vitals',
      'CDN و کشینگ هوشمند',
      'بهینه‌سازی دیتابیس و کوئری‌ها',
      'فشرده‌سازی منابع و Lazy Loading',
    ],
    color: '#fbbf24',
  },
];

export const profile = {
  name: 'پارسا فانی',
  birthDate: '۵ اردیبهشت ۱۳۸۰',
  age: '۲۵ ساله',
  experience: '۷+ سال تجربه',
  headline: 'توسعه‌دهنده فول‌استک، مدرس و معمار تجربه‌های دیجیتال',
};

export const experiences: Experience[] = [
  {
    role: 'مدیر فنی و توسعه‌دهنده ارشد',
    company: 'شرکت فناوری دیجیتال پارسا',
    period: '۱۴۰۴ - اکنون',
    description: 'رهبری تیم توسعه و طراحی معماری سیستم‌های مقیاس‌پذیر، پیاده‌سازی فرآیندهای دواپس و سئو',
    achievements: [
      'بازطراحی کامل معماری میکروسرویس و کاهش ۶۰٪ زمان پاسخ‌گویی API',
      'پیاده‌سازی پایپ‌لاین CI/CD و کاهش ۸۰٪ زمان استقرار',
      'افزایش ۲۲۰٪ ترافیک ارگانیک با استراتژی سئو فول‌استک',
      'مدیریت تیم ۵ نفره توسعه‌دهنده',
    ],
    tech: ['React', 'Node.js', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
  },
  {
    role: 'مهندس دواپس و زیرساخت',
    company: 'گروه نرم‌افزاری نوین',
    period: '۱۴۰۲ - ۱۴۰۴',
    description: 'مدیریت زیرساخت سرور، اتوماسیون استقرار و بهینه‌سازی عملکرد سیستم',
    achievements: [
      'راه‌اندازی Kubernetes Cluster با ۹۹.۹٪ آپ‌تایم',
      'مهاجرت به Docker و کاهش ۵۰٪ هزینه سرور',
      'پیاده‌سازی مانیتورینگ با Prometheus و Grafana',
      'بهینه‌سازی دیتابیس و کاهش ۷۰٪ زمان کوئری',
    ],
    tech: ['Docker', 'Kubernetes', 'Nginx', 'Linux', 'AWS', 'Prometheus'],
  },
  {
    role: 'متخصص سئو و توسعه‌دهنده وب',
    company: 'آژانس دیجیتال مارکتینگ',
    period: '۱۴۰۰ - ۱۴۰۲',
    description: 'بهینه‌سازی وب‌سایت‌ها برای موتورهای جستجو و توسعه وب‌سایت‌های شرکتی',
    achievements: [
      'افزایش ۳۰۰٪ ترافیک ارگانیک برای ۱۵ مشتری',
      'طراحی و توسعه ۴۰+ وب‌سایت شرکتی و فروشگاهی',
      'پیاده‌سازی استراتژی محتوا و لینک‌سازی',
      'بهینه‌سازی Core Web Vitals و رسیدن به امتیاز ۹۵+',
    ],
    tech: ['WordPress', 'React', 'Google Analytics', 'GSC', 'Screaming Frog'],
  },
  {
    role: 'برنامه‌نویس فریلنسر',
    company: 'پروژه‌های مستقل',
    period: '۱۳۹۸ - ۱۴۰۰',
    description: 'شروع مسیر حرفه‌ای با توسعه وب‌سایت و آشنایی با سئو و سرور',
    achievements: [
      'توسعه ۳۰+ وب‌سایت برای کسب‌وکارهای کوچک',
      'یادگیری React و Node.js به صورت خودآموز',
      'راه‌اندازی اولین سرور لینوکسی شخصی',
    ],
    tech: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'Linux'],
  },
];

export const education: Education[] = [
  {
    degree: 'کارشناسی ارشد مهندسی کامپیوتر (نرم‌افزار)',
    institution: 'دانشگاه صنعتی شریف',
    period: '۱۴۰۲ - ۱۴۰۴',
    description: 'پایان‌نامه در زمینه سیستم‌های توزیع‌شده و بهینه‌سازی عملکرد دیتابیس',
  },
  {
    degree: 'کارشناسی مهندسی کامپیوتر (نرم‌افزار)',
    institution: 'دانشگاه تهران',
    period: '۱۳۹۸ - ۱۴۰۲',
    description: 'تخصص در توسعه نرم‌افزار، پایگاه داده و شبکه',
  },
];

export const certifications: Certification[] = [
  { title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '۱۴۰۳' },
  { title: 'Certified Kubernetes Administrator (CKA)', issuer: 'Cloud Native Computing Foundation', year: '۱۴۰۳' },
  { title: 'Google Analytics Certification', issuer: 'Google', year: '۱۴۰۲' },
  { title: 'Docker Certified Associate', issuer: 'Docker Inc.', year: '۱۴۰۲' },
  { title: 'SEO Specialist Certification', issuer: 'Semrush Academy', year: '۱۴۰۱' },
  { title: 'Machine Learning Specialization', issuer: 'Stanford / Coursera', year: '۱۴۰۱' },
];

export const projects: Project[] = [
  {
    title: 'پلتفرم فروشگاهی دیجیتال',
    category: 'وب',
    categoryKey: 'web',
    description: 'طراحی و توسعه پلتفرم فروشگاهی مقیاس‌پذیر با معماری میکروسرویس',
    problem: 'فروشگاه قدیمی با سرعت پایین و عدم مقیاس‌پذیری در ترافیک بالا مشکل داشت',
    solution: 'بازطراحی با React، Node.js و معماری میکروسرویس، بهینه‌سازی دیتابیس و کشینگ',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    result: 'کاهش ۶۵٪ زمان بارگذاری و افزایش ۴۰٪ نرخ تبدیل',
    icon: ShoppingCart,
    color: '#34d399',
  },
  {
    title: 'پایپ‌لاین CI/CD سازمانی',
    category: 'دواپس',
    categoryKey: 'devops',
    description: 'راه‌اندازی پایپ‌لاین اتوماسیون کامل توسعه، تست و استقرار',
    problem: 'فرآیند استقرار دستی، زمان‌بر و مستعد خطا بود',
    solution: 'پیاده‌سازی Docker، Kubernetes و GitHub Actions با استقرار خودکار',
    tech: ['Docker', 'Kubernetes', 'GitHub Actions', 'Nginx', 'Prometheus'],
    result: 'کاهش ۸۰٪ زمان استقرار و رسیدن به آپ‌تایم ۹۹.۹٪',
    icon: GitBranch,
    color: '#22d3ee',
  },
  {
    title: 'چت‌بات هوش مصنوعی پشتیبانی',
    category: 'هوش مصنوعی',
    categoryKey: 'ai',
    description: 'ادغام مدل‌های زبانی بزرگ برای پشتیبانی خودکار ۲۴/۷',
    problem: 'تیم پشتیبانی قادر به پاسخ‌گویی به حجم بالای درخواست‌ها نبود',
    solution: 'توسعه چت‌بات با GPT API، NLP فارسی و پایگاه دانش اختصاصی',
    tech: ['Python', 'OpenAI API', 'FastAPI', 'PostgreSQL', 'Redis'],
    result: 'پاسخ خودکار به ۷۵٪ درخواست‌ها و رضایت ۹۲٪ مشتریان',
    icon: BrainCircuit,
    color: '#34d399',
  },
  {
    title: 'بهینه‌سازی سئو پورتال شرکتی',
    category: 'سئو',
    categoryKey: 'seo',
    description: 'استراتژی کامل سئو فنی و محتوایی برای پورتال سازمانی',
    problem: 'سایت در صفحات دوم و سوم گوگل قرار داشت و ترافیک ارگانیک کم بود',
    solution: 'سئو فنی، تولید محتوای هدفمند، لینک‌سازی و بهینه‌سازی Core Web Vitals',
    tech: ['Google Analytics', 'GSC', 'Screaming Frog', 'Ahrefs', 'React'],
    result: 'افزایش ۳۵۰٪ ترافیک ارگانیک و رسیدن به صفحه اول گوگل',
    icon: Search,
    color: '#fbbf24',
  },
  {
    title: 'زیرساخت هاستینگ ابری',
    category: 'هاستینگ',
    categoryKey: 'hosting',
    description: 'راه‌اندازی و مدیریت زیرساخت هاستینگ با Load Balancer و مانیتورینگ',
    problem: 'زیرساخت قدیمی ناپایدار بود و در ساعات اوج قطعی داشت',
    solution: 'پیکربندی Nginx Load Balancer، Kubernetes، SSL و مانیتورینگ کامل',
    tech: ['Linux', 'Nginx', 'Kubernetes', 'Prometheus', 'Grafana'],
    result: 'رسیدن به ۹۹.۹۵٪ آپ‌تایم و کاهش ۵۰٪ هزینه‌ها',
    icon: Cloud,
    color: '#22d3ee',
  },
  {
    title: 'سیستم توصیه‌گر محصول',
    category: 'هوش مصنوعی',
    categoryKey: 'ai',
    description: 'توسعه سیستم توصیه‌گر هوشمند با یادگیری ماشین',
    problem: 'نرخ تبدیل پایین به دلیل عدم پیشنهاد محصولات مرتبط',
    solution: 'پیاده‌سازی مدل Collaborative Filtering و Content-Based با Python',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Redis'],
    result: 'افزایش ۳۵٪ فروش و بهبود تجربه کاربری',
    icon: Cpu,
    color: '#34d399',
  },
  {
    title: 'مهاجرت به معماری میکروسرویس',
    category: 'دواپس',
    categoryKey: 'devops',
    description: 'مهاجرت از مونولیت به میکروسرویس با Docker و Kubernetes',
    problem: 'اپلیکیشن مونولیتیک مقیاس‌پذیر نبود و نگهداری سخت بود',
    solution: 'تفکیک سرویس‌ها، کانتینری‌سازی با Docker و ارکستراسیون با Kubernetes',
    tech: ['Docker', 'Kubernetes', 'RabbitMQ', 'PostgreSQL', 'Nginx'],
    result: 'مقیاس‌پذیری ۱۰ برابری و نگهداری آسان‌تر',
    icon: Container,
    color: '#22d3ee',
  },
  {
    title: 'داشبورد تحلیلی سئو',
    category: 'سئو',
    categoryKey: 'seo',
    description: 'توسعه داشبورد تحلیلی برای مانیتورینگ عملکرد سئو',
    problem: 'نبود ابزار یکپارچه برای مانیتورینگ شاخص‌های سئو',
    solution: 'توسعه داشبورد با React، ادغام Google Analytics و GSC API',
    tech: ['React', 'Node.js', 'Google Analytics API', 'GSC API', 'Chart.js'],
    result: 'مانیتورینگ لحظه‌ای و گزارش‌گیری خودکار',
    icon: Gauge,
    color: '#fbbf24',
  },
  {
    title: 'وب‌سایت شرکتی واکنش‌گرا',
    category: 'وب',
    categoryKey: 'web',
    description: 'طراحی و توسعه وب‌سایت شرکتی مدرن با تمرکز بر سئو و سرعت',
    problem: 'سایت قدیمی غیر واکنش‌گرا و بهینه نبود',
    solution: 'توسعه با Next.js، SSR و بهینه‌سازی کامل Core Web Vitals',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    result: 'امتیاز ۹۸ PageSpeed و رتبه اول گوگل',
    icon: Globe,
    color: '#34d399',
  },
];

export const navLinks = [
  { label: 'خانه', href: '#home' },
  { label: 'درباره من', href: '#about' },
  { label: 'رزومه', href: '#resume' },
  { label: 'نمونه کارها', href: '#portfolio' },
  { label: 'تدریس', href: '#teaching' },
  { label: 'تخصص‌ها', href: '#skills' },
  { label: 'تماس', href: '#contact' },
];

export const contactInfo = {
  phone: '09364275000',
  phoneDisplay: '۰۹۳۶۴۲۷۵۰۰۰',
  email: 'parsafani.dev@gmail.com',
  location: 'تهران، ایران',
};

export const socialLinks = [
  { label: 'تلگرام', icon: Send, href: 'https://t.me/parsafani', color: '#22d3ee' },
  { label: 'اینستاگرام', icon: Instagram, href: 'https://instagram.com/parsafani', color: '#fbbf24' },
  { label: 'گیت‌هاب', icon: Github, href: 'https://github.com/parsafani', color: '#e2e8f0' },
  { label: 'لینکدین', icon: Linkedin, href: 'https://linkedin.com/in/parsafani', color: '#34d399' },
];
