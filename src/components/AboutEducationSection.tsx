import { GraduationCap, MapPin, Layers } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function AboutEducationSection() {
  return (
    <>
      {/* SECTION 2: ABOUT ME */}
      <section id="about" className="py-16 lg:py-24 bg-[#080E1C] border-b border-slate-800/70">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-3">
              <p className="text-xs font-medium text-cyan-300 tracking-wide">01 · About Me</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50 text-balance">
                Bridging interface clarity with mobile implementation.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-base text-slate-300 leading-relaxed">
                {PROFILE.bioExtended}
              </p>

              <p className="text-base text-slate-400 leading-relaxed">
                Whether mapping low-fidelity user journeys for mobile viewports, building reactive Flutter screens, or writing Python API clients for automated data workflows, I focus on clean architecture that teammates can read, test, and extend.
              </p>

              {/* Factual Profile Ledger */}
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-6 border-t border-slate-800/80">
                <div>
                  <dt className="text-xs text-slate-400">Location</dt>
                  <dd className="text-sm font-medium text-slate-100 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" aria-hidden="true" />
                    <span>{PROFILE.location}</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-400">Core Discipline</dt>
                  <dd className="text-sm font-medium text-slate-100 mt-1 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0" aria-hidden="true" />
                    <span>Mobile Engineering &amp; UI/UX Design</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-400">Direct Email</dt>
                  <dd className="text-sm font-medium text-slate-100 mt-1">
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="hover:text-cyan-300 transition-colors underline decoration-slate-700 underline-offset-4"
                    >
                      {PROFILE.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-400">Current Availability</dt>
                  <dd className="text-sm font-medium text-cyan-300 mt-1">
                    Internships &amp; Junior Roles
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 (Integrated cleanly in editorial cadence): EDUCATION */}
      <section id="education" className="py-16 lg:py-20 bg-[#060A14] border-b border-slate-800/70">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="space-y-2">
              <p className="text-xs font-medium text-cyan-300 tracking-wide">02 · Education</p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-50">
                Academic Foundation
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Formal Software Engineering training supporting hands-on product design and mobile development.
            </p>
          </div>

          <div className="rounded-xl bg-[#0B1221] border border-slate-800/90 p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-800/80">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/25 flex items-center justify-center shrink-0 text-cyan-300">
                  <GraduationCap className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-slate-50">
                    {PROFILE.education.degree}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {PROFILE.education.institution}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono-tech text-slate-300">
                <span>Status: {PROFILE.education.status}</span>
                <span aria-hidden="true" className="text-slate-600">
                  ·
                </span>
                <span>{PROFILE.education.location}</span>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-xs font-medium text-slate-400 mb-4">
                Key Technical Focus Areas
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROFILE.education.focusAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2.5 text-sm text-slate-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" aria-hidden="true" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
