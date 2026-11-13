import { useState, useEffect } from 'react';
import { Download, Eye, FileText, X, ExternalLink } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function CvSection() {
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    if (!previewOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreviewOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [previewOpen]);

  return (
    <section id="cv" className="py-16 lg:py-20 bg-[#080E1C] border-b border-slate-800/70">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#0B1221] border border-slate-800/90 p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-cyan-300">
              <FileText className="w-4 h-4" aria-hidden="true" />
              <span>07 · Curriculum Vitae</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-50">
              Download or preview my complete CV.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Includes full summaries of my five internships, technical expertise across Flutter, Dart, Android, Python, and Figma, key portfolio projects, and BS Software Engineering details.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={PROFILE.cvPath}
              download={PROFILE.cvDownloadName}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={() => setPreviewOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-100 bg-[#060A14] hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400/50 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Eye className="w-4 h-4 text-cyan-400" aria-hidden="true" />
              <span>Preview CV</span>
            </button>
          </div>
        </div>
      </div>

      {/* CV Preview Modal */}
      {previewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#02040A]/85 backdrop-blur-sm"
          onClick={() => setPreviewOpen(false)}
        >
          <div
            className="w-full max-w-4xl h-[86vh] flex flex-col rounded-xl bg-[#0B1221] border border-slate-700/80 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-slate-800">
              <div className="min-w-0">
                <h3
                  id="cv-modal-title"
                  className="font-display text-base sm:text-lg font-semibold text-slate-50 truncate"
                >
                  {PROFILE.cvDownloadName}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={PROFILE.cvPath}
                  download={PROFILE.cvDownloadName}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
                >
                  <Download className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Download</span>
                </a>
                <a
                  href={PROFILE.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-200 border border-slate-700 hover:border-cyan-400/50 rounded-lg transition-colors"
                >
                  <span>Open Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={() => setPreviewOpen(false)}
                  aria-label="Close CV preview"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-700 text-slate-200 hover:text-cyan-300 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-slate-950">
              <iframe
                src={PROFILE.cvPath}
                title="Umar Farooq Curriculum Vitae"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
