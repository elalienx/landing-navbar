// Project files
import "./primary-link.css";

interface props {
  /** What to show on the screen */
  text: string;

  /** Decide if we show or hide the icon of all PrimaryLinks */
  showIcon: boolean;
}

export default function PrimaryLink({ text, showIcon }: props) {
  return (
    <a href="#" className="primary-link" title={text}>
      {showIcon && <span className="icon">{/* empty on purpose */}</span>}
      {text}
    </a>
  );
}
