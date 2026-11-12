# Carlos Mendoza — Portfolio

Personal portfolio of Carlos Mendoza, a full-stack developer in Bogotá, Colombia, who builds AI agents and full-stack platforms and runs them in production.

**Live:** [koatth60.github.io](https://koatth60.github.io)

---

## What the site shows

**AI agents**

- **Onix — WhatsApp AI sales agent (multi-tenant SaaS).** Python, FastAPI, LangGraph, PostgreSQL + pgvector with row-level security, and routing across Claude, Gemini and DeepSeek by conversation stage. The agent recognizes products from customer photos, takes orders and guides payments. Tools own prices, stock and totals; the model only drives the conversation.
- **Real-time voice agent for Major Incident reporting.** Python, Pipecat and Pipecat Flows, Deepgram STT, Silero VAD with smart-turn detection, Claude Haiku and TTS with fallback. The agent runs the triage, takes the full report by phone, and stores a field only if the caller actually said it.

**Web platforms**

- **[Lingolandias Academy](https://lingolandias.com)** — Language-learning platform with 500+ active users, built and run solo (React, NestJS, PostgreSQL, Socket.IO, Jitsi, S3, Docker).
- **[Grillr](https://grillr-seven.vercel.app)** — AI mock-interview SaaS (Next.js, NestJS, Prisma, Claude API, Stripe).
- **[Lingolandias Website](https://lingolandias.net)** — Multi-language marketing site with a level quiz (React, i18next, Express).
- **Handy Pro** — Services marketplace built by a team of 6. My part was the backend: real-time chat, Stripe payments and the data preload (NestJS, TypeORM, Socket.IO).

---

## Tech

The site is plain HTML, CSS and JavaScript, with no build step, and is served by GitHub Pages.

- Light and dark themes: the site follows the system setting, and a manual toggle is saved in `localStorage`.
- The layout is responsive and has an accessible mobile menu.
- Architecture diagrams are inline SVG and follow the active theme.
- Sections fade in with `IntersectionObserver`. The animation is off when the user asks for reduced motion.
- The contact form uses [FormSubmit](https://formsubmit.co) and a honeypot field.

```
/
├── index.html     # Single-page portfolio
├── styles.css     # Design tokens, layout, components, themes
├── script.js      # Menu, theme toggle, active nav, reveal animations
├── success.html   # Contact form confirmation
├── resume.pdf
└── assets/        # Photo and project screenshots
```

Run it locally:

```bash
python -m http.server 5173
```

---

## Contact

- Email: koatth60@gmail.com
- GitHub: [github.com/koatth60](https://github.com/koatth60)
- LinkedIn: [carlos-mendoza-060097225](https://www.linkedin.com/in/carlos-mendoza-060097225/)

---

## License

All rights reserved. The source is public for portfolio purposes only. Do not use, copy or distribute it without permission from the author.
