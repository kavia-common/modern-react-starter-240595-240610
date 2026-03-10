import React from "react";
import { scrollToId } from "../../utils/dom";

/**
 * Hero section. Uses accessible buttons/links and keeps content provided by page data.
 */

// PUBLIC_INTERFACE
export function Hero({ person }) {
  /** Renders the portfolio hero (intro, highlights, and call-to-actions). */
  return (
    <section className="hero" aria-label="Intro">
      <div className="container">
        <div className="heroGrid">
          <div className="card">
            <div className="cardInner">
              <div className="pill" role="note" aria-label="Status">
                <span aria-hidden="true">●</span>
                <span>Now playing: building delightful web experiences</span>
              </div>

              <h1 className="heroTitle">
                Hi, I’m <span>{person.name}</span> — {person.role}.
              </h1>
              <p className="heroLead">{person.tagline}</p>

              <div className="heroActions" role="group" aria-label="Primary actions">
                <button className="btn btnPrimary" onClick={() => scrollToId("projects")}>
                  View projects
                </button>
                <button className="btn" onClick={() => scrollToId("contact")}>
                  Contact
                </button>
                <a className="btn" href={person.contact.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="heroMeta">
            <div className="card">
              <div className="cardInner metaItem">
                <div className="metaLabel">Location</div>
                <div className="metaValue">{person.location}</div>
              </div>
            </div>

            <div className="card">
              <div className="cardInner metaItem">
                <div className="metaLabel">Highlights</div>
                <div className="metaValue">
                  <ul style={{ margin: 0, paddingLeft: 18 }}>
                    {person.highlights.map((h) => (
                      <li key={h} style={{ margin: "6px 0", color: "rgba(214, 226, 255, 0.85)" }}>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="cardInner metaItem">
                <div className="metaLabel">Quick keys</div>
                <div className="metaValue">
                  <span className="kbd">Ctrl</span> + <span className="kbd">K</span> to search (coming
                  soon)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
