import { useState } from 'react';
import { Eye, ImageOff } from 'lucide-react';
import { PROCESS_STAGES, PROJECTS, ProjectItem } from '../data/portfolioData';

interface UiUxShowcaseSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function UiUxShowcaseSection({ onSelectProject }: UiUxShowcaseSectionProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const designArtifacts = PROJECTS.filter(
    (p) => p.id === 'expense-tracker' || p.id === 'smart-hostel-management'
  );
  const activeStage = PROCESS_STAGES[activeStepIndex];

  return (
    <section id="uiux" className="py-16 lg:py-24 bg-[#060A14] border-b border-slate-800/70">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-medium text-cyan-300 tracking-wide">
              06 · UI/UX Design Showcase
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50">
              Design Systems &amp; Prototyping Workflow
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Interactive prototypes, component hierarchies, and structural case studies designed before code is written.
          </p>
        </div>

        {/* Visual Artifact Pair: Expense Tracker & Smart Hostel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {designArtifacts.map((artifact) => {
            const imgFailed = failedImages[artifact.id];
            return (
              <div
                key={artifact.id}
                className="rounded-xl bg-[#0B1221] border border-slate-800/90 overflow-hidden flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] bg-[#070B16] border-b border-slate-800/80 overflow-hidden">
                  {imgFailed ? (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                      <ImageOff className="w-7 h-7 text-slate-500 mb-2" aria-hidden="true" />
                      <p className="text-sm font-medium text-slate-300">{artifact.title}</p>
                    </div>
                  ) : (
                    <img
                      src={artifact.image}
                      alt={artifact.imageAlt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [artifact.id]: true }))
                      }
                      className="w-full h-full object-cover object-top"
                    />
                  )}
                </div>

                <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-cyan-300 font-medium">{artifact.categoryLabel}</p>
                    <h3 className="font-display text-lg font-semibold text-slate-50 mt-0.5">
                      {artifact.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {artifact.stack.join(' · ')}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectProject(artifact)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-100 bg-slate-800/80 hover:bg-cyan-400 hover:text-slate-950 border border-slate-700/80 hover:border-cyan-400 rounded-lg transition-colors shrink-0 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Inspect Artifact</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive 4-Step Design-to-Code Process */}
        <div className="rounded-xl bg-[#0B1221] border border-slate-800/90 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div>
              <h3 className="font-display text-xl font-semibold text-slate-50">
                Design-to-Engineering Process
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Select a stage to inspect deliverables from discovery through Flutter implementation.
              </p>
            </div>

            {/* Interactive Step Switcher */}
            <div
              role="tablist"
              aria-label="Workflow stages"
              className="inline-flex flex-wrap gap-1 p-1 rounded-lg bg-[#060A14] border border-slate-800"
            >
              {PROCESS_STAGES.map((stage, idx) => {
                const isSelected = idx === activeStepIndex;
                return (
                  <button
                    key={stage.step}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`px-3 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      isSelected
                        ? 'bg-cyan-400 text-slate-950 font-semibold'
                        : 'text-slate-300 hover:text-slate-50 hover:bg-slate-800/70'
                    }`}
                  >
                    <span className="font-mono-tech mr-1.5">{stage.step}</span>
                    <span>{stage.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 space-y-2">
              <p className="font-mono-tech text-xs text-cyan-300">
                Stage {activeStage.step} of 04
              </p>
              <h4 className="font-display text-2xl font-semibold text-slate-50">
                {activeStage.title}
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {activeStage.summary}
              </p>
            </div>

            <div className="lg:col-span-5">
              <p className="text-xs font-medium text-slate-400 mb-3">Stage Deliverables</p>
              <ul className="space-y-2.5">
                {activeStage.deliverables.map((del) => (
                  <li
                    key={del}
                    className="flex items-center justify-between py-2 px-3.5 rounded-lg bg-[#060A14] border border-slate-800/80 text-sm text-slate-200"
                  >
                    <span>{del}</span>
                    <span className="font-mono-tech text-xs text-cyan-300">Included</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
