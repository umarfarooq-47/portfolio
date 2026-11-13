import { ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="font-display text-base font-semibold text-slate-100">
            {PROFILE.name}
          </p>
          <p className="text-xs text-slate-400">
            {PROFILE.title} · {PROFILE.location}
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
          <a href="#about" className="hover:text-cyan-300 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-cyan-300 transition-colors">
            Projects
          </a>
          <a href="#experience" className="hover:text-cyan-300 transition-colors">
            Experience
          </a>
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-1 text-slate-200 hover:text-cyan-300 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
