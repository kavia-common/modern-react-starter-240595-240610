import React, { useMemo } from "react";
import { getPortfolioData } from "../../data/portfolio";

import { TopNav } from "../../components/TopNav/TopNav";
import { Hero } from "../../components/Hero/Hero";
import { Section } from "../../components/Section/Section";
import { SkillsGrid } from "../../components/SkillsGrid/SkillsGrid";
import { ProjectsGrid } from "../../components/ProjectsGrid/ProjectsGrid";
import { ExperienceList } from "../../components/ExperienceList/ExperienceList";
import { ContactCard } from "../../components/ContactCard/ContactCard";

/**
 * Single-page portfolio, structured so it can grow into multi-page routing later.
 */

// PUBLIC_INTERFACE
export function PortfolioPage() {
  /** Renders the main portfolio page. */
  const data = useMemo(() => getPortfolioData(), []);

  const navItems = [
    { id: "skills", label: "Skills", icon: "⌁" },
    { id: "projects", label: "Projects", icon: "▣" },
    { id: "experience", label: "Experience", icon: "⟐" },
    { id: "contact", label: "Contact", icon: "✦" },
  ];

  return (
    <div className="portfolioRoot">
      <TopNav
        brandTitle={`${data.person.name} // portfolio`}
        brandSubtitle="retro build, modern craft"
        items={navItems}
      />

      <main>
        <Hero person={data.person} />

        <Section id="skills" title="Skills" hint="A small stack, used well.">
          <SkillsGrid skills={data.skills} />
        </Section>

        <Section id="projects" title="Projects" hint="Selected work and experiments.">
          <ProjectsGrid projects={data.projects} />
        </Section>

        <Section id="experience" title="Experience" hint="Where I’ve been shipping lately.">
          <ExperienceList experience={data.experience} />
        </Section>

        <Section id="contact" title="Contact" hint="Let’s build something fun.">
          <ContactCard contact={data.person.contact} />
        </Section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footerRow">
            <div>
              <span style={{ color: "rgba(214, 226, 255, 0.9)" }}>{data.person.name}</span>{" "}
              <span aria-hidden="true">•</span> retro portfolio theme
            </div>
            <div>
              <span className="kbd">Tip</span> Edit content in{" "}
              <span style={{ color: "rgba(38, 255, 230, 0.9)" }}>src/data/portfolio.js</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
