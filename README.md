# Umar Farooq — Developer Portfolio

A clean, responsive portfolio built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, **Lucide Icons**, and **Motion**.

---

## Opening & Running in VS Code (Windows 11)

### 1. Prerequisites
Install **Node.js (LTS version 18 or newer)** from [https://nodejs.org/](https://nodejs.org/).  
During installation, keep the default option that adds `node` and `npm` to your Windows `PATH`.

### 2. Extract and Open the Project
1. Right-click the downloaded ZIP file and choose **Extract All...**.
2. Open **Visual Studio Code**.
3. Go to **File → Open Folder...** and select the extracted project folder (the folder containing `package.json`).

### 3. Install Dependencies
Open the built-in VS Code terminal (**Ctrl + `** or **Terminal → New Terminal**) and run:

```bash
npm install
```

### 4. Start the Local Development Server
Run:

```bash
npm run dev
```

Open your browser and visit `http://localhost:3000`.

### 5. Build for Production
To verify there are no errors and generate the deployable `dist/` folder:

```bash
npm run lint
npm run build
```

You can preview the production build locally with:

```bash
npm run preview
```

---

## Project Structure

```text
├── public/
│   ├── cv.pdf                       # Original CV PDF (served at /cv.pdf)
│   └── assets/portfolio/            # Original project screenshots & profile photo
├── src/
│   ├── components/
│   │   ├── Navbar.tsx               # Sticky header & mobile navigation drawer
│   │   ├── HeroSection.tsx          # Hero intro + live Time Zone Converter widget
│   │   ├── AboutEducationSection.tsx# About Me & BS Software Engineering card
│   │   ├── SkillsSection.tsx        # 4-category technical skillset
│   │   ├── ProjectsSection.tsx      # Filterable project showcase
│   │   ├── ProjectModal.tsx         # Accessible case study detail modal
│   │   ├── ExperienceSection.tsx    # 5-internship industry timeline
│   │   ├── UiUxShowcaseSection.tsx  # Figma/architecture showcase & 4-step workflow
│   │   ├── CvSection.tsx            # Direct PDF download & in-browser preview modal
│   │   ├── ContactSection.tsx       # Copyable email, WhatsApp/socials & mailto form
│   │   └── Footer.tsx               # Clean footer & back-to-top anchor
│   ├── data/
│   │   └── portfolioData.ts         # Single file to edit profile, skills, projects & dates
│   ├── App.tsx                      # Root page composition
│   ├── index.css                    # Tailwind CSS v4 entry & custom slider styles
│   └── main.tsx                     # React entry point
├── AUDIT_NOTES.md                   # Audit of original ZIP issues & items to verify
├── index.html                       # Document metadata, fonts & root mount
├── package.json                     # Dependencies & scripts
└── vite.config.ts                   # Vite + React + Tailwind configuration
```

---

## How to Update Your Information

All text, internship durations, project descriptions, and GitHub links live in **`src/data/portfolioData.ts`**.
Search for `pending verification` or `Add specific repo URL` in that file to fill in exact internship dates and individual repository links once verified.

To update your CV, replace `public/cv.pdf` with your updated PDF file (keep the same filename `cv.pdf`).

---

## Environment Variables

No API keys or backend services are required to run or deploy this portfolio. See `.env.example` for optional metadata.
