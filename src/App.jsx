import { useState, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { styleReset } from "react95";
import original from "react95/dist/themes/original";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import StartMenu from "./components/StartMenu";
import AppHeader from "./components/AppHeader";
import LoadingModal from "./components/LoadingModal";
import WindowGeneric from "./components/windows/WindowGeneric";

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
    background-color: teal;
  }
  ${styleReset}
`;

const App = () => {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [showInitialLoader, setShowInitialLoader] = useState(true);
  const [count, setCount] = useState(6);
  const [displayedWindows, setDisplayedWindows] = useState(['generic']);

  useEffect(() => {
    if (count < 0) {
      return setShowInitialLoader(false);
    }

    const intervalId = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]);

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
            />
          )}
          {showInitialLoader && (
            <LoadingModal
              topText={loaderTopText}
              bottomText={loaderBottomText}
            />
          )}
          {displayedWindows.includes('generic') && <WindowGeneric displayedWindows={displayedWindows} setDisplayedWindows={setDisplayedWindows} />}
        </main>
      </ThemeProvider>
    </>
  );
};

export default App;
