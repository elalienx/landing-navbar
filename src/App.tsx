// Node modules
import { useState } from "react";

// Project files
import PrimaryLink from "./components/primary-link/PrimaryLink";
import "./styles/style.css";

export default function App() {
  // Local state
  const [active, setActive] = useState(1);
  const [showIcons, setShowIcons] = useState(true);

  return (
    <div className="app">
      <h1>Navigation Bar</h1>

      <nav className="nav">
        <PrimaryLink
          id={1}
          text={"Privatlån"}
          showIcon={showIcons}
          state={[active, setActive]}
        />
        <PrimaryLink
          id={2}
          text={"Företagslån"}
          showIcon={showIcons}
          state={[active, setActive]}
        />
        <PrimaryLink
          id={3}
          text={"Bolån"}
          showIcon={showIcons}
          state={[active, setActive]}
        />
      </nav>

      <label>
        <input
          type="checkbox"
          checked={showIcons}
          onChange={() => setShowIcons(!showIcons)}
        />
        Toogle icon visibility
      </label>
    </div>
  );
}
