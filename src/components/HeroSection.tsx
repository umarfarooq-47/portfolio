import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, RotateCcw } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface TimeZoneRow {
  city: string;
  code: string;
  zone: string;
}

const WORLD_ZONES: TimeZoneRow[] = [
  { city: 'London', code: 'GMT/BST', zone: 'Europe/London' },
  { city: 'New York', code: 'EDT/EST', zone: 'America/New_York' },
  { city: 'Tokyo', code: 'JST', zone: 'Asia/Tokyo' },
  { city: 'Dubai', code: 'GST', zone: 'Asia/Dubai' },
];

function formatInZone(date: Date, timeZone: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(date);
}

function formatDateInZone(date: Date, timeZone: string): string {
  return new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

export default function HeroSection() {
  const [now, setNow] = useState<Date>(() => new Date());
  const [offsetHours, setOffsetHours] = useState<number>(0);

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const shiftedTime = new Date(now.getTime() + offsetHours * 3600 * 1000);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-800/70 bg-[#060A14]"
    >
      {/* Subtle radial atmospheric depth without excessive neon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_18%_12%,rgba(59,130,246,0.14),transparent),radial-gradient(ellipse_55%_45%_at_85%_80%,rgba(34,211,238,0.09),transparent)]"
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 lg:pt-20 lg:pb-20">
        {/* 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Primary Typography & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-5">
              {/* Quiet unboxed kicker metadata */}
              <div className="flex flex-wrap items-center gap-2.5 text-sm text-cyan-300 font-medium">
                <span>Mobile App Developer</span>
                <span aria-hidden="true" className="text-slate-600">
                  ·
                </span>
                <span>UI/UX Specialist</span>
                <span aria-hidden="true" className="text-slate-600">
                  ·
                </span>
                <span className="inline-flex items-center gap-1.5 text-slate-400 font-normal">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400/80" aria-hidden="true" />
                  Mansehra, Pakistan
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.35rem] font-bold tracking-tight text-slate-50 leading-[1.1] text-balance max-w-2xl">
                Designing clear interfaces and building reliable mobile apps.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                {PROFILE.bioShort} I work across Flutter, Dart, Android, React Native, and Figma—turning user flows into clean, responsive software.
              </p>

              {/* Primary & Secondary Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060A14]"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href={PROFILE.cvPath}
                  download={PROFILE.cvDownloadName}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-100 bg-[#0E1629] hover:bg-slate-800/80 border border-slate-700/80 hover:border-cyan-400/50 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <Download className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            {/* Verified Profile Links & Availability */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-slate-400">{PROFILE.availability}</p>

              <div className="flex items-center gap-5">
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Umar Farooq on GitHub"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Umar Farooq on LinkedIn"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  aria-label="Email Umar Farooq"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Portrait Card + Interactive Time Zone Converter Preview */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {/* Profile Portrait Frame */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0B1221] border border-slate-800/90">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0 border border-slate-700/80 bg-slate-900">
                <img
                  src={PROFILE.portraitPath}
                  alt="Umar Farooq"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060A14]/45 via-transparent to-transparent"
                />
              </div>
              <div className="min-w-0">
                <p className="font-display text-lg font-semibold text-slate-50 truncate">
                  {PROFILE.name}
                </p>
                <p className="text-sm text-cyan-300">Flutter &amp; UI/UX Developer</p>
                <p className="text-xs text-slate-400 mt-1">
                  BS Software Engineering · Hazara University
                </p>
              </div>
            </div>

            {/* Interactive Time Zone Converter Widget (Live demonstration of Umar's project logic) */}
            <div
              id="timezone-demo"
              className="flex-1 flex flex-col justify-between p-5 rounded-xl bg-[#0B1221] border border-slate-800/90"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                  <div>
                    <p className="text-xs font-medium text-cyan-300">
                      Interactive Project Preview
                    </p>
                    <h2 className="font-display text-base font-semibold text-slate-100">
                      Time Zone Converter
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOffsetHours(0)}
                    disabled={offsetHours === 0}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md border border-slate-700/80 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" aria-hidden="true" />
                    <span>Reset</span>
                  </button>
                </div>

                {/* PKT Base Station */}
                <div className="py-4 flex items-baseline justify-between gap-4">
                  <div>
                    <p className="text-xs text-slate-400">Base Anchor · Pakistan (PKT)</p>
                    <p className="font-mono-tech text-3xl font-semibold text-slate-50 tracking-tight mt-0.5">
                      {formatInZone(shiftedTime, 'Asia/Karachi')}
                    </p>
                  </div>
                  <p className="text-xs text-slate-400 font-mono-tech">
                    {formatDateInZone(shiftedTime, 'Asia/Karachi')}
                  </p>
                </div>

                {/* Hour Offset Slider */}
                <div className="pb-4">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <label htmlFor="hero-tz-offset" className="text-slate-300 font-medium">
                      Hour Offset Simulation
                    </label>
                    <span className="font-mono-tech text-cyan-300 font-medium">
                      {offsetHours > 0 ? `+${offsetHours}h` : `${offsetHours}h`}
                    </span>
                  </div>
                  <input
                    id="hero-tz-offset"
                    type="range"
                    min={-12}
                    max={12}
                    step={1}
                    value={offsetHours}
                    onChange={(e) => setOffsetHours(Number(e.target.value))}
                    className="tz-slider w-full"
                  />
                </div>
              </div>

              {/* Synchronized Target Zones */}
              <ul className="divide-y divide-slate-800/80 border-t border-slate-800/80">
                {WORLD_ZONES.map((row) => (
                  <li
                    key={row.zone}
                    className="py-2.5 flex items-center justify-between gap-3 text-sm"
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-slate-200 font-medium">{row.city}</span>
                      <span className="text-xs text-slate-500 font-mono-tech">{row.code}</span>
                    </div>
                    <span className="font-mono-tech text-slate-100 font-medium">
                      {formatInZone(shiftedTime, row.zone)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Factual Summary Strip (Strictly verified facts, no vanity metrics) */}
        <dl className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <dt className="text-xs text-slate-400">Primary Focus</dt>
            <dd className="font-display text-base font-semibold text-slate-100 mt-1">
              Flutter, Dart &amp; UI/UX
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">Academic Track</dt>
            <dd className="font-display text-base font-semibold text-slate-100 mt-1">
              BS Software Engineering
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">Industry Internships</dt>
            <dd className="font-display text-base font-semibold text-slate-100 mt-1 font-mono-tech">
              5 Completed Roles
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">Portfolio Works</dt>
            <dd className="font-display text-base font-semibold text-slate-100 mt-1 font-mono-tech">
              5 Documented Projects
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
