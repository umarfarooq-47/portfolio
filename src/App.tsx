import { useState } from 'react';
import { ProjectItem } from './data/portfolioData';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutEducationSection from './components/AboutEducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import UiUxShowcaseSection from './components/UiUxShowcaseSection';
import CvSection from './components/CvSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#060A14] text-slate-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:bg-cyan-400 focus:text-slate-950 focus:font-semibold focus:rounded-lg"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutEducationSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <ExperienceSection />
        <UiUxShowcaseSection onSelectProject={setSelectedProject} />
        <CvSection />
        <ContactSection />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
