import React from "react";

// PUBLIC_INTERFACE
export function ProjectsGrid({ projects }) {
  /** Renders project cards with tags and outbound links. */
  return (
    <div className="grid3" role="list">
      {projects.map((p) => (
        <article className="card" role="listitem" key={p.title} aria-label={`Project: ${p.title}`}>
          <div className="cardInner">
            <div className="itemTitleRow">
              <h3 className="itemTitle">{p.title}</h3>
              <span className="pill" aria-label="Project status">
                build
              </span>
            </div>
            <p className="itemSub">{p.description}</p>

            <div className="tags" aria-label="Tech tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>

            <div className="itemLinks" aria-label="Project links">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  className="inlineLink"
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span aria-hidden="true">↗</span>
                  <span>{l.label}</span>
                </a>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
