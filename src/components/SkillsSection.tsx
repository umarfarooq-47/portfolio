import { Smartphone, Code2, PenTool, Wrench } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

const GROUP_ICONS: Record<string, typeof Smartphone> = {
  mobile: Smartphone,
  programming: Code2,
  uiux: PenTool,
  tools: Wrench,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 lg:py-24 bg-[#080E1C] border-b border-slate-800/70">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <p className="text-xs font-medium text-cyan-300 tracking-wide">03 · Technical Skills</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50">
              Engineering &amp; Design Toolkit
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Practical frameworks, languages, and design workflows applied across coursework and five industry internships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group) => {
            const Icon = GROUP_ICONS[group.id] || Code2;
            return (
              <div
                key={group.id}
                className="rounded-xl bg-[#0B1221] border border-slate-800/90 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-300 shrink-0">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-slate-50">
                        {group.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">{group.subtitle}</p>
                    </div>
                  </div>

                  <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
                    {group.items.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-baseline justify-between gap-2 py-1.5 border-b border-slate-800/50 text-sm"
                      >
                        <span className="text-slate-100 font-medium">{skill.name}</span>
                        {skill.note && (
                          <span className="text-xs font-mono-tech text-cyan-300/90 shrink-0">
                            {skill.note}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
