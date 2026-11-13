import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, FolderGit2, ImageOff } from 'lucide-react';
import { PROJECTS, ProjectCategory, ProjectItem } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const FILTER_TABS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'uiux', label: 'UI/UX Design' },
  { id: 'architecture', label: 'System Architecture' },
];

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const visibleProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 lg:py-24 bg-[#060A14] border-b border-slate-800/70">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <p className="text-xs font-medium text-cyan-300 tracking-wide">04 · Featured Work</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50">
              Projects &amp; Case Studies
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Original project builds and design case studies across mobile engineering, Figma UI/UX, and system architecture. Select any project to inspect its full case study.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div
            role="tablist"
            aria-label="Filter projects by discipline"
            className="inline-flex flex-wrap items-center gap-1 p-1 rounded-lg bg-[#0B1221] border border-slate-800/90 self-start lg:self-auto"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isActive
                      ? 'bg-cyan-400 text-slate-950 font-semibold'
                      : 'text-slate-300 hover:text-slate-50 hover:bg-slate-800/60'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {visibleProjects.map((project, index) => {
            const isFirstFeatured = activeFilter === 'all' && index === 0;
            const imgFailed = failedImages[project.id];

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className={`group rounded-xl bg-[#0B1221] border border-slate-800/90 hover:border-cyan-400/40 transition-colors duration-200 overflow-hidden flex flex-col ${
                  isFirstFeatured ? 'md:col-span-2 lg:grid lg:grid-cols-12' : ''
                }`}
              >
                {/* Project Media Frame */}
                <div
                  className={`relative bg-[#070B16] overflow-hidden border-b border-slate-800/80 ${
                    isFirstFeatured
                      ? 'lg:col-span-7 lg:border-b-0 lg:border-r aspect-[16/10] lg:aspect-auto lg:min-h-[340px]'
                      : 'aspect-[16/10]'
                  }`}
                >
                  {imgFailed ? (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#0B1221] to-[#111B33]">
                      <ImageOff className="w-7 h-7 text-slate-500 mb-2" aria-hidden="true" />
                      <p className="text-sm font-medium text-slate-300">{project.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{project.categoryLabel}</p>
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [project.id]: true }))
                      }
                      className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                    />
                  )}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060A14]/50 via-transparent to-transparent"
                  />
                </div>

                {/* Project Body */}
                <div
                  className={`p-6 flex flex-col justify-between gap-5 ${
                    isFirstFeatured ? 'lg:col-span-5 lg:p-8' : ''
                  }`}
                >
                  <div className="space-y-3">
                    {/* Unboxed Metadata Line */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                      <span className="text-cyan-300 font-medium">{project.categoryLabel}</span>
                      <span aria-hidden="true" className="text-slate-600">
                        ·
                      </span>
                      <span>{project.context}</span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-50 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Stack text list separated typographically */}
                    <p className="text-xs font-mono-tech text-slate-400 pt-1">
                      {project.stack.join(' · ')}
                    </p>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
                    >
                      <FolderGit2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
