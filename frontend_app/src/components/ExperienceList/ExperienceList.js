import React from "react";

// PUBLIC_INTERFACE
export function ExperienceList({ experience }) {
  /** Renders experience entries. */
  return (
    <div className="grid2" role="list">
      {experience.map((e) => (
        <div className="card" role="listitem" key={`${e.title}-${e.org}`}>
          <div className="cardInner">
            <div className="itemTitleRow">
              <h3 className="itemTitle">{e.title}</h3>
              <span className="pill" aria-label="Time period">
                {e.period}
              </span>
            </div>
            <p className="itemSub" style={{ marginTop: 6 }}>
              <strong style={{ color: "rgba(214, 226, 255, 0.92)" }}>{e.org}</strong>
            </p>
            <p className="itemSub">{e.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
