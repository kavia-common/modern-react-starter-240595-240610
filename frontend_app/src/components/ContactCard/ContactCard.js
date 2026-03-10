import React from "react";

// PUBLIC_INTERFACE
export function ContactCard({ contact }) {
  /** Renders contact links (email + social). */
  return (
    <div className="card">
      <div className="cardInner">
        <div className="itemTitleRow">
          <h3 className="itemTitle">Let’s connect</h3>
          <span className="pill" aria-label="Contact note">
            ping
          </span>
        </div>

        <p className="itemSub">
          Prefer email?{" "}
          <a className="inlineLink" href={`mailto:${contact.email}`}>
            <span aria-hidden="true">✉</span>
            <span>{contact.email}</span>
          </a>
        </p>

        <div className="itemLinks" aria-label="Social links">
          <a className="inlineLink" href={contact.github} target="_blank" rel="noreferrer">
            <span aria-hidden="true">↗</span>
            <span>GitHub</span>
          </a>
          <a className="inlineLink" href={contact.linkedin} target="_blank" rel="noreferrer">
            <span aria-hidden="true">↗</span>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
