import { useEffect, useState, useRef } from "react";
import { Window, Button, WindowHeader, WindowContent } from "react95";

import "./WindowProjects.scss";

import moveElement from "../../helpers/moveElement";

export default function WindowProjects(props) {
  useEffect(() => {
    const returnObj = moveElement(props.windowId);

    return () => {
      const { windowHeader, handleWindowMove } = returnObj;
      windowHeader.removeEventListener("mousedown", handleWindowMove);
    };
  }, [props.windowId]);

  const [windowHasFocus, setWindowHasFocus] = useState(true);
  const windowRef = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (windowRef.current && !windowRef.current.contains(e.target)) {
        setWindowHasFocus(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [windowHasFocus]);

  return (
    <Window
      className="window"
      id={props.windowId}
      ref={windowRef}
      onMouseDown={() => setWindowHasFocus(true)}
      style={{ zIndex: windowHasFocus ? 1 : 0 }}
    >
      <WindowHeader active={windowHasFocus} className="window-header">
        <span>My Projects</span>
        <Button
          onClick={() =>
            props.setDisplayedWindows(
              props.displayedWindows.filter(
                (window) => window !== props.windowId
              )
            )
          }
        >
          <span className="close-icon">X</span>
        </Button>
      </WindowHeader>
      <WindowContent>
        <article>
          <h3>
            <a
              href="https://github.com/adamlacasse"
              target="_blank"
              rel="noopener noreferrer"
            >
              See My GitHub Profile
            </a>
          </h3>
          <p>
            {"I'll post some samples here later ;-) "}
            {"This site was created with React and Sass and a nifty component library called "}
            <a
              href="https://react95.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React95
            </a>
          </p>
        </article>
      </WindowContent>
    </Window>
  );
}
