import { useEffect, useState, useRef } from "react";
import {
  Window,
  Button,
  WindowHeader,
  WindowContent,
} from "react95";

import "./WindowBiography.scss";

import moveElement from "../../helpers/moveElement";

export default function WindowBiography(props) {
  useEffect(() => {
    const returnObj = moveElement(props.windowId);

    return () => {
      const { windowHeader, handleWindowMove } = returnObj;
      windowHeader.removeEventListener('mousedown', handleWindowMove);
    }
  }, [props.windowId]);

  const [windowHasFocus, setWindowHasFocus] = useState(true);
  const windowRef = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (windowRef.current && !windowRef.current.contains(e.target)) {
        setWindowHasFocus(false);
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
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
        <span>My Professional Background</span>
        <Button onClick={() => props.setDisplayedWindows(props.displayedWindows.filter(window => window !== props.windowId))}>
          <span className="close-icon">X</span>
        </Button>
      </WindowHeader>
      <WindowContent>
      <article>
          <p>
            I'm a{" "}
            <span className="emphasized-words">
              full stack software engineer
            </span>
            , currently employed full time on an award-winning team at{" "}
            <a
              href="https://www.libertymutual.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Liberty Mutual Insurance
            </a>
            . I specialize in <span className="emphasized-words">React.js</span>{" "}
            and <span className="emphasized-words">Redux</span> front-ends, and{" "}
            <span className="emphasized-words">Java Spring Boot</span> back-ends
            with <span className="emphasized-words">PostgreSQL</span> databases
            - all hosted on <span className="emphasized-words">AWS</span>. I
            also have experience in a potpourri of other technologies.
          </p>
          <hr />
          <p>
            I've been a full stack engineer since 2018, when I effected a pretty
            big career change. I had worked in{" "}
            <span className="emphasized-words">
              financial planning &amp; analysis
            </span>{" "}
            in the real estate and legal industries since 2000 - most recently
            spending three years as Director of Administration (effectively COO)
            for New Hampshire's second-largest law firm.
          </p>
          <br />
          <p>
            Despite achieving success in the legal industry and having worked on
            some outstanding teams, as I rose the ranks and looked down the pike
            I realized that I missed the true collaboration and creativity that
            fueled me earlier in my career. So, I quit my job (amicably) and
            enrolled in University of New Hampshire's{" "}
            <a
              href="https://bootcamp.unh.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coding Boot Camp
            </a>
            .
          </p>
          <br />
          <p>
            After graduating the boot camp I enjoyed a few contract gigs and did
            some freelance work before landing at Liberty Mutual, where I've
            been since June 2019.
          </p>
        </article>
      </WindowContent>
    </Window>
  );
}
