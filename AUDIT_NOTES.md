# Original Portfolio ZIP Audit & Verification Notes

This file summarizes the technical issues found in the uploaded `portfolio.zip` (`portfolio_ea425725.zip`) and the profile/CV discrepancies flagged for your verification.

---

## 1. Codebase & Architecture Issues Found in Original ZIP

1. **CSS-to-HTML Selector Mismatch**:
   - `index.html` used `.nav`, `.nav-menu`, `.hero-copy`, `.hero-device`, `.work`, `.facts`, `.does`, `.ledger`, `.steps`, `.contact-grid`, and `.chat`.
   - `style.css` still styled an older layout (`.navbar`, `.nav-links`, `.menu-btn`, `.hero-text`, `.hero-img`, `.about-wrap`, `.skill-card`, `.project-card`, `.timeline-item`), leaving most of `index.html` unstyled except two hotfix rules at the bottom of `style.css`.
2. **Broken JavaScript (`script.js`)**:
   - `script.js` queried `#menu-btn`, `.nav-links`, `.skill-card`, and `.project-card` which did not exist in `index.html`, causing an immediate runtime `TypeError` on `menuBtn.addEventListener(...)`.
   - None of the interactive elements in `index.html` (mobile `#nav-toggle`, Time Zone Converter `#offset` slider, `#contact-form`, or `#chat-form`) had working JavaScript handlers.
3. **Unused Assets & Path Confusion**:
   - `images/README.txt` instructed placing images inside `images/`, while the actual files (`profile.jpg`, `gallery.png`, `timezone.png`, `social.png`, `expense.png`, `smart-hostel.png`) were in the root directory.
   - `smart-hostel.png` was present in the ZIP but unused in `index.html` (which rendered a CSS box diagram instead).
4. **Netlify Chatbot Function (`netlify/functions/chat.js`)**:
   - Configured with an invalid default Anthropic model identifier (`"claude-haiku-5-5"`).
   - Required `ANTHROPIC_API_KEY` on Netlify, which was not configured, and had no frontend wiring in `script.js`.
   - Removed from the live UI so the site does not ship a non-functional assistant or invalid model call.

---

## 2. Profile & CV Discrepancies Flagged for Verification

Please review and update these items in `src/data/portfolioData.ts`:

1. **Company Name Spelling (`NovaAccelerate` vs `novaXccelerate`)**:
   - Your CV (`cv.pdf`) and existing `index.html` write **NovaAccelerate** (`4 Months`, Hybrid Pakistan).
   - Your brief listed `novaXccelerate / NovaAccelerate`. Both are noted clearly until you confirm the official company spelling.
2. **Missing Internship Dates & Durations**:
   - **NovaAccelerate**: `4 Months` listed in CV, no start/end months or years.
   - **CodeAlpha**: `1 Month` listed in CV, no start/end months or years.
   - **Arch Technologies**, **DevelopersHub Corporation**, and **FutureXcel**: Listed as Remote (Pakistan) in `cv.pdf` with **no duration or dates**. Honest placeholders (`Duration & dates pending verification`) are used so nothing is fabricated.
3. **Social Connect Tech Stack (`Flutter / Dart` vs `React Native`)**:
   - Your brief asked to verify Social Connect (`React Native / Mobile App Development`) against available files.
   - Both `cv.pdf` (*"utilizing optimized Dart array pipelines to safely execute absolute CRUD data mutations"*) and the original `index.html` document it as a **Flutter & Dart** application.
   - Meanwhile, the uploaded `social.png` asset depicts a desktop analytics/dashboard mockup (`SOCIAL CONNECT [BETA]`) rather than mobile screens. A transparent verification note is included in the case study modal.
4. **Skills Alignment**:
   - `React Native` and `JavaScript` were requested in your brief but were not listed on the original `cv.pdf`. Both are now included in your skills section; consider updating `cv.pdf` to stay consistent.
5. **Individual Project Repository & Figma Links**:
   - The original `index.html` linked every project card generically to `https://github.com/umarfarooq-47` (and `https://www.figma.com/` for Expense Tracker).
   - All project links point honestly to your verified GitHub profile until you add exact repository and Figma URLs in `src/data/portfolioData.ts`.
