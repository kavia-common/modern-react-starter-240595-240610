import React from "react";

// PUBLIC_INTERFACE
export function SkillsGrid({ skills }) {
  /** Renders skill cards in a responsive grid. */
  return (
    <div className="grid3" role="list">
      {skills.map((s) => (
        <div className="card" role="listitem" key={s.title}>
          <div className="cardInner">
            <div className="itemTitleRow">
              <h3 className="itemTitle">{s.title}</h3>
              <span className="pill" aria-label="Skill badge">
                ★
              </span>
            </div>
            <p className="itemSub">{s.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
