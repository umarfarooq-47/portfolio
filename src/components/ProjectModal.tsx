import { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Info } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#02040A]/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#0B1221] border border-slate-700/80 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 bg-[#0B1221]/95 backdrop-blur-md border-b border-slate-800">
          <div className="min-w-0">
            <p className="text-xs text-cyan-300 font-medium">
              {project.categoryLabel} · {project.context}
            </p>
            <h3
              id="case-study-title"
              className="font-display text-lg sm:text-xl font-bold text-slate-50 truncate"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-700/80 bg-slate-900 text-slate-200 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* High-Resolution Screenshot */}
          <div className="rounded-lg overflow-hidden border border-slate-800 bg-[#060A14]">
            <img
              src={project.image}
              alt={project.imageAlt}
              referrerPolicy="no-referrer"
              className="w-full max-h-[460px] object-contain mx-auto"
            />
          </div>

          {/* Metadata Strip */}
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-slate-800/80">
            <div>
              <dt className="text-xs text-slate-400">Role</dt>
              <dd className="text-sm font-medium text-slate-100 mt-1">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-400">Context</dt>
              <dd className="text-sm font-medium text-slate-100 mt-1">{project.context}</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-400">Technologies</dt>
              <dd className="text-xs font-mono-tech text-cyan-300 mt-1">
                {project.stack.join(' · ')}
              </dd>
            </div>
          </dl>

          {/* Case Study Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-display text-base font-semibold text-slate-100">
                Problem Statement
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">{project.problem}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-display text-base font-semibold text-slate-100">
                Engineering &amp; Design Approach
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Implementation Highlights */}
          <div className="space-y-3">
            <h4 className="font-display text-base font-semibold text-slate-100">
              Key Deliverables
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2
                    className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verification Note if present */}
          {project.verificationNote && (
            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/25 flex items-start gap-3">
              <Info className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs text-slate-200 leading-relaxed">
                {project.verificationNote}
              </p>
            </div>
          )}

          {/* Footer Links */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
            >
              <span>{project.githubLabel}</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-slate-100 border border-slate-700 rounded-lg transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
