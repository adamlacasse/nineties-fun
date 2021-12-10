import { useState, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { styleReset } from "react95";
import original from "react95/dist/themes/original";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import StartMenu from "./components/StartMenu";
import AppHeader from "./components/AppHeader";
import LoadingModal from "./components/LoadingModal";
import WindowBiography from "./components/windows/WindowBiography";
import WindowExperience from "./components/windows/WindowExperience";
import WindowProjects from "./components/windows/WindowProjects";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  #desktop {
    min-height: 100vh;
    background-color: teal;
  }
  ${styleReset}
`;

const App = () => {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [showInitialLoader, setShowInitialLoader] = useState(true);
  const [count, setCount] = useState(6);
  const [displayedWindows, setDisplayedWindows] = useState([]);

  // Handle loader logic
  useEffect(() => {
    if (count < 0) {
      return setShowInitialLoader(false);
    }

    const intervalId = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]);

  // loader props
  const loaderTopText = "Loading...";

  const loaderBottomText = (
    <section className="loader-bottom">
      <p>Just kidding; this Loader doesn't do anything.</p>
      <p>Joke ending in {`${count} second${count !== 1 ? "s" : ""}`}</p>
    </section>
  );

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <AppHeader
          startMenuOpen={startMenuOpen}
          setStartMenuOpen={setStartMenuOpen}
        />
        <main>
          {startMenuOpen && (
            <StartMenu
              showInitialLoader={showInitialLoader}
              setshowInitialLoader={setShowInitialLoader}
              displayedWindows={displayedWindows}
              setDisplayedWindows={setDisplayedWindows}
              setStartMenuOpen={setStartMenuOpen}
            />
          )}
          <section
            id="desktop"
            onClick={() => {
              if (startMenuOpen) {
                setStartMenuOpen(false);
              }
            }}
          >
            {showInitialLoader && (
              <LoadingModal
                topText={loaderTopText}
                bottomText={loaderBottomText}
              />
            )}
            {displayedWindows.includes("biography") && (
              <WindowBiography
                displayedWindows={displayedWindows}
                setDisplayedWindows={setDisplayedWindows}
                windowId="biography"
              />
            )}
            {displayedWindows.includes("experience") && (
              <WindowExperience
                displayedWindows={displayedWindows}
                setDisplayedWindows={setDisplayedWindows}
                windowId="experience"
              />
            )}
            {displayedWindows.includes("projects") && (
              <WindowProjects
                displayedWindows={displayedWindows}
                setDisplayedWindows={setDisplayedWindows}
                windowId="projects"
              />
            )}
          </section>
        </main>
      </ThemeProvider>
    </>
  );
};

export default App;
