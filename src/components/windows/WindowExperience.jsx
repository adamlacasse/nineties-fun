import { useEffect, useState, useRef } from "react";
import { Window, Button, WindowHeader, WindowContent, Panel } from "react95";

import "./WindowExperience.scss";

import moveElement from "../../helpers/moveElement";

export default function WindowExperience(props) {
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
        <span>My Professional Experience</span>
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
          <ul>
            <li>
              <h3 className="emphasized-words">
                <a
                  href="https://www.libertymutual.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Liberty Mutual Insurance
                </a>
              </h3>
              <Panel variant="well" className="title-panel">
                <h3 className="emphasized-words">Software Engineer</h3>
                <h4>June 2019 to present</h4>
              </Panel>
              <p>
                I'm part of an award-winning team that creates web applications
                for Liberty's Global Leadership, Learning, and Talent (GLLT)
                division. We primarily develop Node/React/Redux front ends with
                Java Spring Boot & PostgresSQL back ends. We are dedicated{" "}
                <span className="emphasized-words">Agile</span> practicioners.
              </p>
            </li>
            <br />
            <li>
              <h3 className="emphasized-words">
                <a
                  href="https://www.trilogyed.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trilogy Education
                </a>
              </h3>
              <Panel variant="well" className="title-panel">
                <h3 className="emphasized-words">Teaching Assistant - Full Stack Web Development</h3>
                <h4>March 2019 to September 2019</h4>
              </Panel>
              <p>
                I assisted students in learning full stack web development -
                specifically the{" "}
                <span className="emphasized-words">MERN stack</span>{" "}
                (MongoDB/MySQL, Express.js, React.js, Node.js)
              </p>
            </li>
            <br />
            <li>
              <h3 className="emphasized-words">
                <a
                  href="https://www.theatomgroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Atom Group
                </a>
              </h3>
              <Panel variant="well" className="title-panel">
                <h3 className="emphasized-words">JavaScript/Web Engineer</h3>
                <h4>
                  April 2019 to June 2019 and November 2018 to February 2019
                </h4>
              </Panel>
              <p>
                Two contract assignments subcontracting with major technology
                companies on end to end testing with{" "}
                <span className="emphasized-words">
                  Selenium and Nightwatch.js
                </span>
                , and enhancing a complex Node.js test harness application.
              </p>
            </li>
            <br />
            <li>
              <h3 className="emphasized-words">
                <a
                  href="https://www.devinemillimet.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Devine Millimet
                </a>
              </h3>
              <Panel variant="well" className="title-panel">
                <h3 className="emphasized-words">Director of Administration</h3>
                <h4>July 2015 to March 2018</h4>
              </Panel>
              <p>
                I directed all the day to day operations of the law firm
                including IT, marketing, finance, HR, and facilities.
              </p>
            </li>
            <br />
            <li>
              <h3 className="emphasized-words">
                <a
                  href="https://www.brownrudnick.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Brown Rudnick
                </a>
              </h3>
            <Panel variant="well" className="title-panel">
              <h3 className="emphasized-words">Director of Financial Planning & Analysis</h3>
              <h4>February 2005 to June 2015</h4>
            </Panel>
              <p>
                I was promoted twice, first from financial analyst to manager,
                then to director. I utilized a number of technologies to improve
                processes.
              </p>
            </li>
          </ul>
        </article>
      </WindowContent>
    </Window>
  );
}
