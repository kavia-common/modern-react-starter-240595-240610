import React from "react";
import { scrollToId } from "../../utils/dom";

/**
 * Top navigation for single-page sections.
 * Kept as a component so the app can later evolve to routing without rewrites.
 */

// PUBLIC_INTERFACE
export function TopNav({ brandTitle, brandSubtitle, items }) {
  /** Renders sticky top navigation with section jump links. */
  return (
    <nav className="topNav" aria-label="Primary">
      <div className="container">
        <div className="topNavRow">
          <div className="brand" aria-label={`${brandTitle} brand`}>
            <span className="brandMark" aria-hidden="true" />
            <div>
              <div className="brandTitle">{brandTitle}</div>
              <div className="brandSubtitle">{brandSubtitle}</div>
            </div>
          </div>

          <div className="navLinks">
            {items.map((item) => (
              <a
                key={item.id}
                className="navLink"
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(item.id);
                }}
              >
                <span aria-hidden="true">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
