import React from "react";
import "./App.css";

import { PortfolioPage } from "./pages/PortfolioPage/PortfolioPage";

// PUBLIC_INTERFACE
function App() {
  /** Root application component (single-page portfolio). */
  return (
    <div className="App">
      <PortfolioPage />
    </div>
  );
}

export default App;
