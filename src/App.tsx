// Node modules
import { useState } from "react";

// Project files
import "./App.css";
import PrimaryLink from "./components/primary-link/PrimaryLink";

function App() {
  const [showIcons, setShowIcons] = useState(true);

  return (
    <div className="app">
      <h1>Navigation Bar</h1>
      <nav className="nav">
        <PrimaryLink text={"Privatlån"} showIcon={showIcons} />
        <PrimaryLink text={"Företagslån"} showIcon={showIcons} />
        <PrimaryLink text={"Bolån"} showIcon={showIcons} />
      </nav>
    </div>
  );
}
