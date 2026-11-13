import { Briefcase, CalendarClock } from 'lucide-react';
import { INTERNSHIPS } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 lg:py-24 bg-[#080E1C] border-b border-slate-800/70">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <p className="text-xs font-medium text-cyan-300 tracking-wide">
              05 · Internship Experience
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50">
              Industry Timeline
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Five internships documented in my CV across UI/UX design, Flutter/Android engineering, and Python API integration.
          </p>
        </div>

        {/* Clean Timeline List (No thick left accent borders) */}
        <ol className="relative space-y-6">
          {INTERNSHIPS.map((item, idx) => (
            <li
              key={item.id}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 p-6 sm:p-7 rounded-xl bg-[#0B1221] border border-slate-800/90"
            >
              {/* Left Column: Organization, Role & Timeline Metadata */}
              <div className="lg:col-span-4 space-y-2.5">
                <div className="flex items-center gap-3">
                  <span className="font-mono-tech text-xs font-semibold text-cyan-300 w-7 h-7 rounded-md bg-blue-500/10 border border-blue-500/25 flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-slate-50">
                    {item.company}
                  </h3>
                </div>

                {item.alternateName && (
                  <p className="text-xs text-slate-400 italic">{item.alternateName}</p>
                )}

                <p className="text-sm font-medium text-cyan-300 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{item.role}</span>
                </p>

                <div className="pt-1 space-y-1 text-xs text-slate-400">
                  <p>{item.mode}</p>
                  <p className="inline-flex items-center gap-1.5 font-mono-tech text-slate-300">
                    <CalendarClock className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                    <span>{item.duration}</span>
                  </p>
                </div>
              </div>

              {/* Right Column: Responsibilities & Deliverables */}
              <div className="lg:col-span-8 space-y-4 lg:border-l lg:border-slate-800/80 lg:pl-8">
                <p className="text-sm font-medium text-slate-200 leading-relaxed">
                  {item.summary}
                </p>

                <ul className="space-y-2">
                  {item.responsibilities.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shrink-0 mt-2"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="pt-2 text-xs font-mono-tech text-slate-400">
                  Focus: {item.deliverables.join(' · ')}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
