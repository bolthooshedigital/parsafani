import { useState, useMemo } from 'react';
import { ArrowUpRight, X, CheckCircle2, Lightbulb, TrendingUp } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { useTilt } from '@/hooks/useTilt';
import { projects, type Project } from '@/data/content';

const categories = [
  { label: 'همه', key: 'all' },
  { label: 'وب', key: 'web' },
  { label: 'سئو', key: 'seo' },
  { label: 'دواپس', key: 'devops' },
  { label: 'هوش مصنوعی', key: 'ai' },
  { label: 'هاستینگ', key: 'hosting' },
];

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const { ref: revealRef, visible } = useReveal();
  const { ref: tiltRef, transform, speed } = useTilt<HTMLDivElement>({ max: 12, scale: 1.03 });

  return (
    <div
      ref={revealRef}
      className={`reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        ref={tiltRef}
        className="relative perspective-1000 cursor-pointer group"
        onClick={onOpen}
      >
        <div
          className="relative preserve-3d transition-transform"
          style={{ transform, transition: `transform ${speed}ms cubic-bezier(0.23, 1, 0.32, 1)` }}
        >
          <div className="glass-strong rounded-2xl p-6 h-full hover:bg-white/5 transition-colors min-h-[280px] flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: `${project.color}15`, transform: 'translateZ(30px)' }}
              >
                <project.icon className="w-7 h-7" style={{ color: project.color }} />
              </div>
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ background: `${project.color}15`, color: project.color }}
              >
                {project.category}
              </span>
            </div>

            <h3 className="text-lg font-bold text-gray-100 mb-2" style={{ transform: 'translateZ(20px)' }}>
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">{project.description}</p>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md bg-white/5 text-gray-400 text-xs"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-0.5 rounded-md bg-white/5 text-gray-500 text-xs">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
              <div className="w-8 h-8 rounded-lg glass flex items-center justify-center group-hover:bg-accent-500 group-hover:text-white transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="glass-strong rounded-3xl p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: `${project.color}15` }}
            >
              <project.icon className="w-7 h-7" style={{ color: project.color }} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>
              <span
                className="px-3 py-1 rounded-full text-xs font-medium mt-1 inline-block"
                style={{ background: `${project.color}15`, color: project.color }}
              >
                {project.category}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

        <div className="space-y-4 mb-6">
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-5 h-5 text-gold-400" />
              <h4 className="text-sm font-bold text-gray-100">چالش</h4>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{project.problem}</p>
          </div>

          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-accent-400" />
              <h4 className="text-sm font-bold text-gray-100">راه‌حل</h4>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{project.solution}</p>
          </div>

          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <h4 className="text-sm font-bold text-gray-100">نتیجه</h4>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{project.result}</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-gray-300 mb-3">تکنولوژی‌های استفاده شده</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-lg bg-accent-500/10 text-accent-300 text-sm font-medium border border-accent-500/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const { ref, visible } = useReveal();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((p) => p.categoryKey === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" ref={ref} className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-12`}>
          <span className="text-sm font-semibold text-cyan-400 tracking-widest uppercase">نمونه کارها</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 text-gray-100">پروژه‌های منتخب</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-accent-400 rounded-full mx-auto mt-4" />
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            مجموعه‌ای از پروژه‌های حرفه‌ای در حوزه‌های توسعه وب، سئو، دواپس، هوش مصنوعی و هاستینگ
          </p>
        </div>

        <div className={`reveal ${visible ? 'visible' : ''} flex flex-wrap items-center justify-center gap-3 mb-12`}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-accent-500 to-cyan-500 text-white shadow-lg shadow-accent-500/20'
                  : 'glass text-gray-400 hover:text-gray-200 hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
