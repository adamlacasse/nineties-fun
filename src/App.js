import { useState, useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset, LoadingIndicator } from 'react95';
import original from "react95/dist/themes/original";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import StartMenu from './components/StartMenu';
import AppHeader from './components/AppHeader';

import './App.scss';

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
  const [showLoader, setShowLoader] = useState(true);
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count < 0) {
      return setShowLoader(false);
    };

    const intervalId = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <AppHeader startMenuOpen={startMenuOpen} setStartMenuOpen={setStartMenuOpen} />
        {startMenuOpen && <StartMenu />}
        {showLoader && (
          <section id="loading-section">
            <div id="loading-container">
              <p id="loader-text-top">Loading...</p>
              <LoadingIndicator isLoading />
              <p>Just kidding; this Loader doesn't do anything. Joke ending in {`${count} second${count !== 1 ? 's' : ''}`}</p>
            </div>
          </section>
        )}
      </ThemeProvider>
    </main>
  );
};

export default App;
