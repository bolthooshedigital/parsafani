import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { skills, services } from '@/data/content';

function FlipCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} relative perspective-1000 h-72`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div
        className={`relative w-full h-full preserve-3d transition-transform duration-700 cursor-pointer ${
          flipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="absolute inset-0 backface-hidden">
          <div className="glass-strong rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: `${service.color}15` }}
            >
              <service.icon className="w-8 h-8" style={{ color: service.color }} />
            </div>
            <h3 className="text-lg font-bold text-gray-100 mb-2">{service.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
            <div className="mt-4 text-xs text-gray-500 flex items-center gap-1">
              برای جزئیات کلیک کنید
            </div>
          </div>
        </div>

        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div
            className="rounded-2xl p-6 h-full flex flex-col justify-center"
            style={{
              background: `linear-gradient(135deg, ${service.color}15, rgba(15,15,23,0.95))`,
              border: `1px solid ${service.color}30`,
            }}
          >
            <h3 className="text-lg font-bold text-gray-100 mb-4 text-center">{service.title}</h3>
            <div className="space-y-3">
              {service.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ background: service.color }}
                  />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-gray-500 text-center">
              برای بازگشت کلیک کنید
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const { ref, visible } = useReveal();
  const [width, setWidth] = useState(0);

  if (visible && width === 0) {
    setTimeout(() => setWidth(skill.level), 100);
  }

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <skill.icon className="w-4 h-4" style={{ color: skill.color }} />
          <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
        </div>
        <span className="text-sm font-bold" style={{ color: skill.color }}>
          {skill.level}٪
        </span>
      </div>
      <div className="h-2 rounded-full bg-ink-700 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
            boxShadow: `0 0 10px ${skill.color}40`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" ref={ref} className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-16`}>
          <span className="text-sm font-semibold text-accent-400 tracking-widest uppercase">تخصص‌ها</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 text-gray-100">مهارت‌ها و خدمات</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-400 to-gold-400 rounded-full mx-auto mt-4" />
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            روی هر کارت کلیک کنید تا جزئیات بیشتری ببینید
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, i) => (
            <FlipCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <h3 className="text-2xl font-bold text-gray-100 text-center mb-10">مهارت‌های فنی</h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
