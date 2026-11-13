import { useState, FormEvent } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  AlertCircle,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorText, setErrorText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorText('Please complete your name, email address, and message.');
      setSubmitted(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorText('Please enter a valid email address.');
      setSubmitted(false);
      return;
    }

    setErrorText('');
    setSubmitted(true);

    const subject = encodeURIComponent(`Portfolio Inquiry from ${trimmedName}`);
    const body = encodeURIComponent(
      `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#060A14]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-medium text-cyan-300 tracking-wide">08 · Contact</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-50 text-balance">
                Let&apos;s build something dependable.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Open to Mobile App Development internships, junior Flutter roles, and UI/UX collaboration. Reach out directly by email, WhatsApp, or LinkedIn.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Email + Copy button */}
              <div className="p-4 rounded-xl bg-[#0B1221] border border-slate-800/90 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs text-slate-400">Email</p>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-sm font-medium text-slate-100 hover:text-cyan-300 transition-colors truncate block mt-0.5"
                  >
                    {PROFILE.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-slate-700/80 bg-slate-900 text-slate-200 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-cyan-300" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="p-4 rounded-xl bg-[#0B1221] border border-slate-800/90 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-slate-400">Phone / WhatsApp</p>
                  <a
                    href={PROFILE.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono-tech font-medium text-slate-100 hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5 mt-0.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
                    <span>{PROFILE.phone}</span>
                  </a>
                </div>
                <a
                  href={PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-xs font-medium rounded-lg border border-slate-700/80 bg-slate-900 text-slate-200 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors shrink-0"
                >
                  WhatsApp
                </a>
              </div>

              {/* Location & Socials */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                  <span>{PROFILE.location}</span>
                </span>

                <div className="flex items-center gap-4">
                  <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors"
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" aria-hidden="true" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#0B1221] border border-slate-800/90 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  required
                  className="w-full px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 bg-[#060A14] border border-slate-700/80 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@company.com"
                  required
                  className="w-full px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 bg-[#060A14] border border-slate-700/80 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about the role, internship, or mobile project..."
                required
                className="w-full px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 bg-[#060A14] border border-slate-700/80 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-y"
              />
            </div>

            {errorText && (
              <div
                role="alert"
                className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center gap-2 text-xs text-rose-200"
              >
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" aria-hidden="true" />
                <span>{errorText}</span>
              </div>
            )}

            {submitted && (
              <div
                role="status"
                className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center gap-2 text-xs text-cyan-200"
              >
                <Mail className="w-4 h-4 text-cyan-300 shrink-0" aria-hidden="true" />
                <span>
                  Opening your default email client with your message addressed to {PROFILE.email}.
                </span>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <p className="text-xs text-slate-400">
                Submits directly via your email client—no third-party tracking.
              </p>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
