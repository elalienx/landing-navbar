// Project files
import "./primary-link.css";

interface props {
  /** Unique identifier of the button */
  id: number;

  /** What to show on the screen */
  text: string;

  /** Decide if we show or hide the icon of all PrimaryLinks */
  showIcon: boolean;

  /** Method to set the active button */
  state: [state: number, (id: number) => void];
}

export default function PrimaryLink({ id, text, showIcon, state }: props) {
  const [active, setActive] = state;

  // Properties
  const isActive: boolean = active === id;
  const activeCSS = isActive ? "active" : "";

  return (
    <a
      href="#"
      className={`primary-link ${activeCSS}`}
      title={text}
      onClick={() => setActive(id)}
    >
      {showIcon && <div className="icon">{/* empty on purpose */}</div>}
      {text}
    </a>
  );
}
