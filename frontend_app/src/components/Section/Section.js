import React from "react";

/**
 * Section wrapper to keep headings and spacing consistent across the page.
 */

// PUBLIC_INTERFACE
export function Section({ id, title, hint, children }) {
  /** Renders a page section with header and content. */
  return (
    <section className="section" id={id} aria-label={title}>
      <div className="container">
        <div className="sectionHeader">
          <h2 className="sectionTitle">{title}</h2>
          {hint ? <p className="sectionHint">{hint}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
