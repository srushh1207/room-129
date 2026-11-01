# **ROOM 129** 

### **WEBSITE REQUIREMENTS & CODEX BUILD BRIEF** 

_Creative portfolio • Functional specification • Deployment handover_ 

## **1. Project overview** 

Build ROOM 129, a distinctive, highly interactive personal creative portfolio. The experience should feel like entering a vintage record store crossed with an experimental art archive and an independent editorial studio. It must be memorable and expressive without sacrificing usability, accessibility, responsiveness or performance. 

## **2. Visual identity** 

- Royal crimson: #811515 (RGB 129, 21, 21) 

- Vintage ivory: #F2EBDD 

- Deep charcoal: #191715 

- Dusty rose: #C98D8D 

- Muted beige: #D8CBB8 

- Typography: expressive editorial serif for large headlines, paired with a bold modern sans-serif for navigation and labels. 

- Textures: subtle film grain, paper, scanned scrapbook details, film borders, handwritten annotations and layered collage elements. 

## **3. Core experience and scroll behaviour** 

**Opening / hero —** Start with a full-screen landing scene. Show ROOM 129, the headline “A MIND FULL OF THINGS. AND A SPACE TO PUT THEM.”, the line “Art, frames, pixels, threads, code and little obsessions.” and a clear “PRESS PLAY TO EXPLORE” instruction. A large vinyl record is the main visual. 

**Scroll-driven vinyl —** As the visitor scrolls down, the vinyl should rotate in sync with scroll progress. The record should remain visually anchored or pinned during the main navigation sequence. The centre label and nearby title/description change as each category becomes active. 

**Six creative stops —** Divide the scroll journey into six distinct stages. At each stage, rotate the vinyl to a new position, update the active category, transition the background/art direction, and reveal that category’s content. Use smooth, restrained transitions rather than sudden jumps. 

**Direct navigation —** The six category names must also be clickable. Clicking a category should smoothly move to its matching scroll section and update the vinyl position and active state. Scrolling manually must produce the same state changes. 

**End of journey —** After the six creative worlds, transition into About, Archive and Contact. The vinyl may shrink, move aside or become a small persistent navigation/player element. 

## **4. Creative sections** 

**01 — THE VIEWFINDER:** Photography. Use cinematic image layouts, film strips, contact sheets, captions and large image viewing. 

**02 — THE ART DEPARTMENT:** Art and illustration. Use an experimental sketchbook, layered artwork, doodles and paper-like surfaces. 

**03 — THE CUTTING ROOM:** Video and editing. Use film frames, video previews and an editing-timeline-inspired composition. Use poster placeholders until real videos are supplied. 

**04 — THE PIXEL LAB:** Coding and technology. Use a retro-computer-inspired visual language, project previews, short descriptions and technology tags. 

**05 — THE THREAD THEORY:** Crochet and handmade work. Use warm tactile layouts, close-up image placeholders and project notes. 

**06 — THE MISCELLANEOUS:** Other experiments, writing, ideas and work that does not fit elsewhere. Make this section feel like a playful scrapbook. 

## **5. Other pages and features** 

- About: title “A PERSON OF MANY TABS.” Include editable bio text and image placeholders. 

- Archive: searchable and filterable list of all projects, with category filters and individual project detail views. 

- Contact: friendly invitation to collaborate. Use clearly marked dummy details such as hello@example.com and +00 0000 000000, and make them easy to replace. 

- Random project button: opens a randomly selected project. 

- Now Playing indicator: shows the currently active creative section; do not autoplay audio. 

- Interactive desk: optional clickable objects that reveal links to selected sections or projects. 

- Small Easter eggs and hover states, while keeping all essential navigation obvious. 

- Custom cursor on pointer devices only; retain normal touch behaviour on mobile. 

## **6. Functional and technical requirements** 

- Build a complete working website, not just a static mockup. All links, buttons, filters, section navigation and project previews must work. 

- Use reusable components and keep project content in an easy-to-edit data file or clearly labelled content structure. 

- Use replaceable placeholder images/media and sample project entries. Do not invent real personal achievements. 

- Support desktop, tablet and mobile. On mobile, replace complex scroll pinning with a simpler touch-friendly sequence if needed. 

- Respect prefers-reduced-motion. Provide a reduced-motion experience with no scroll-scrubbed rotation or parallax. 

- Keep text readable, provide keyboard-accessible navigation, visible focus states, alt text and adequate colour contrast. 

- Optimise image sizes, lazy-load below-the-fold media and avoid unnecessary heavy animation libraries. 

- Do not autoplay sound or video. Any audio control must require an explicit user action. 

- Include a README with setup, development, build and deployment instructions. 

## **7. Suggested implementation approach** 

First inspect the existing repository and preserve any useful setup. If it is empty, choose a modern, maintainable front-end stack such as React with Vite or Next.js, using TypeScript where practical. Use CSS transforms and a scroll-interaction library only where it materially improves the experience. Keep the vinyl rotation and active-section state driven by one shared source of truth so scrolling and click navigation never become out of sync. 

## **8. Required Codex workflow and deliverables** 

- Inspect the project, explain the proposed stack briefly, then implement the complete site. 

- Create the responsive layouts, interactions, sample content and placeholder assets. 

- Run the available lint, type-check and production build commands. Fix errors before finishing. 

- Test the main flows: scroll through all six sections, click category navigation, open a project, use archive filters, test mobile navigation and reduced-motion mode. 

- Provide a concise summary of files changed, commands run, known limitations and how to replace images, project text and contact details. 

- Do not stop after producing a design plan. Continue through implementation and verification. 

## **9. Deployment handover — Codex must guide the owner** 

After implementation, inspect the actual framework and give deployment instructions that match the repository. Recommend a suitable beginner-friendly host (for example, Vercel for a Next.js app or Vercel/Netlify for a static Vite build), but verify the correct build command and output directory from the project configuration. 

- Explain how to create or sign in to the hosting account and import the Git repository. 

- Explain how to push the project to GitHub if it is not already there. 

- List the exact build settings and any environment variables required. Never invent secrets or ask the owner to paste secrets into public files. 

- Explain how to deploy, find the live URL, test the deployed site and redeploy after future changes. 

- Explain optional custom-domain setup and HTTPS. 

- Include a simple troubleshooting section for failed builds, missing assets and routing errors. 

## **10. Final acceptance criteria** 

The finished result should feel like six creative worlds connected by one strong identity. The vinyl must visibly respond to scroll and navigation; section content and active labels must update together; all essential controls must work; the site must be responsive and accessible; and the owner must receive clear, repository-specific deployment instructions. 

## **COPY-PASTE MASTER PROMPT FOR CODEX** 

You are my senior frontend developer, interaction designer and deployment guide. Build the ROOM 129 website described in the requirements document. Work directly in the current repository. 

IMPORTANT: Do not only give me a plan or a mockup. Inspect the repository, implement the complete working website, run it, test it, fix issues and then guide me through deployment. 

The central interaction is a scroll-driven vinyl record: 

1. The first screen is a full-screen hero with a large spinning vinyl and ROOM 129 branding. 

2. As I scroll, the vinyl rotates in sync with scroll progress and stays pinned/anchored during the six-section journey where practical. 

3. Each of the six creative sections is a scroll stop. When a section becomes active, update the vinyl label, active navigation item, section title, short description, background treatment and visual content together. 

4. Scrolling backwards must reverse the sequence correctly. 

5. Clicking a category in the navigation must smoothly scroll to that section and update the vinyl to the same state. Manual scrolling and clicking must never become desynchronised. 

6. At the end of the six sections, transition into About, Archive and Contact. 

7. On small screens, use a reliable touch-friendly version rather than forcing awkward pinned scrolling. 

The six sections are: THE VIEWFINDER (photography), THE ART DEPARTMENT (art/illustration), THE CUTTING ROOM (video/editing), THE PIXEL LAB (coding), THE THREAD THEORY (crochet/handmade), and THE MISCELLANEOUS (other work). 

Use this identity: crimson #811515, ivory #F2EBDD, charcoal #191715, dusty rose #C98D8D and beige #D8CBB8. The style is vintage editorial, vinyl culture, film grain, scrapbook collage and experimental digital art. Avoid generic portfolio cards and corporate layouts. 

Include a working searchable/filterable archive, project detail views, random-project button, About page, Contact page and persistent “NOW PLAYING” indicator. Use obvious dummy contact details (hello@example.com and +00 0000 000000) that I can replace later. Use sample projects and clearly replaceable placeholder images; do not claim they are my real work. 

Make all controls functional. Ensure keyboard accessibility, responsive layouts, alt text, visible focus states and prefers-reduced-motion support. Do not autoplay audio or video. Keep performance in mind and lazy-load large media. 

Before coding, inspect the repository and choose the stack that best fits what is already there. Keep components reusable and project data easy to edit. Do not overwrite useful existing work. 

#### When finished: 

- Run lint/type-check/build commands available in the repo and fix errors. 

- Test scrolling through all six sections, direct category navigation, backward scrolling, archive search/filtering, project details, mobile layout and reduced-motion behaviour. 

- Tell me exactly how to replace placeholder images, project text and contact information. 

- Write/update a README with local setup and deployment instructions. 

DEPLOYMENT IS PART OF THE TASK. Identify the actual framework and give me beginner-friendly, exact steps to publish this repository online. Explain GitHub setup/pushing if needed, which hosting platform to use, exact build command/output settings, environment variables if any, how to obtain the live URL, how to connect an optional 

custom domain and how to redeploy updates. Do not guess settings: inspect package.json and project configuration first. If you can perform deployment actions with available tools, ask for my confirmation before any action that publishes publicly or changes accounts. Otherwise guide me step by step. 

Do not finish with only generic advice. Deliver the implemented website, verification results, editable-content instructions and repository-specific deployment guide. 

