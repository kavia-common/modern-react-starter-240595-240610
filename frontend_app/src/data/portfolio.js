/**
 * Centralized portfolio content.
 * Keep this file as the single source of truth so UI components stay reusable.
 */

// PUBLIC_INTERFACE
export function getPortfolioData() {
  /** Returns portfolio content used across the app. */
  return {
    person: {
      name: "Your Name",
      role: "Frontend Developer",
      location: "Remote / Your City",
      tagline: "I build playful, fast UIs with a soft spot for retro aesthetics.",
      highlights: [
        "React • Hooks • Component architecture",
        "Accessible UI • Responsive layouts",
        "APIs • State management • Performance tuning",
      ],
      contact: {
        email: "you@example.com",
        github: "https://github.com/your-handle",
        linkedin: "https://www.linkedin.com/in/your-handle",
      },
    },
    skills: [
      { title: "UI Engineering", description: "Design systems, components, and interaction details." },
      { title: "React", description: "Hooks, state patterns, and scalable composition." },
      { title: "Web Platform", description: "Semantic HTML, CSS, performance, accessibility." },
    ],
    projects: [
      {
        title: "Retro Task Tracker",
        description:
          "A to-do app with keyboard-first UX, local persistence, and a neon CRT vibe.",
        tags: ["React", "LocalStorage", "Accessibility"],
        links: [
          { label: "Live demo", href: "https://example.com" },
          { label: "Source", href: "https://github.com/your-handle/retro-task-tracker" },
        ],
      },
      {
        title: "API Dashboard",
        description:
          "A compact dashboard that visualizes API health and latency with clean loading/error states.",
        tags: ["React", "Fetch", "Charts"],
        links: [
          { label: "Source", href: "https://github.com/your-handle/api-dashboard" },
        ],
      },
      {
        title: "Portfolio v1",
        description:
          "A minimalist personal site focused on quick navigation and a crisp retro theme.",
        tags: ["React", "CSS", "Responsive"],
        links: [{ label: "Source", href: "https://github.com/your-handle/portfolio" }],
      },
    ],
    experience: [
      {
        title: "Frontend Developer",
        org: "Acme Studio",
        period: "2024 — Present",
        description:
          "Built reusable UI patterns, improved Lighthouse scores, and shipped accessible features.",
      },
      {
        title: "Web Developer",
        org: "Freelance",
        period: "2022 — 2024",
        description:
          "Delivered responsive marketing sites and product UIs with clean, maintainable code.",
      },
    ],
  };
}
