import { useState, useEffect } from "react";
import { List, ListItem, Divider } from "react95";
import resumeIcon from "../img/resume.png";
import pcIcon from "../img/pc.ico";
import folderWithTools from "../img/folder_tools.png";
import globeIcon from "../img/globe.png";
import BiographyPanel from "./panels/BiographyPanel";
import ExperiencePanel from "./panels/ExperiencePanel";
import ProjectsPanel from "./panels/ProjectsPanel";
import LoadingModal from "./LoadingModal";

import "./StartMenu.scss";

const StartMenu = (props) => {
  const [startMenuLoaderOpen, setStartMenuLoaderOpen] = useState(false);
  const [showBiographyPanel, setShowBiographyPanel] = useState(false);

  const toggleLoader = () => {
    if (props.showInitialLoader) {
      props.setshowInitialLoader(false);
    }
    setStartMenuLoaderOpen(!startMenuLoaderOpen);
  };

  const loaderTopText = "Restarting your computer...";

  const loaderBottomText = (
    <section className="loader-bottom">
      <p>
        Again, just kidding. Click Start or Restart once more to close this Loader.
      </p>
    </section>
  );

  return (
    <section className="start-menu">
      <List>
        <div className="start-menu-contents">
          <div className="windows95">
            Windows<span>95</span>
          </div>
          <div className="list-item-container">
            <ListItem 
              onMouseEnter={() => setShowBiographyPanel(true)}
              onMouseLeave={() => setShowBiographyPanel(false)}            >
                <img src={globeIcon} alt="globe icon" />
                <span>Biography</span>
                <div class="arrow-right" />
            </ListItem>
            <ListItem>
              <img src={resumeIcon} alt="resume icon" />
              <span>Experience</span>
              <div class="arrow-right" />
            </ListItem>
            <ListItem>
              <img src={folderWithTools} alt="folder with tools" />
              <span>Project Samples</span>
              <div class="arrow-right" />
            </ListItem>

            <Divider className="divider" />

            <ListItem onClick={toggleLoader}>
              <img src={pcIcon} alt="PC icon" />
              <span>Restart</span>
            </ListItem>
          </div>
        </div>
      </List>


      <BiographyPanel
        showBiographyPanel={showBiographyPanel} 
        setShowBiographyPanel={setShowBiographyPanel}
        displayedWindows={props.displayedWindows}
        setDisplayedWindows={props.setDisplayedWindows}
      />

      <ExperiencePanel />
      <ProjectsPanel />

      {startMenuLoaderOpen && (
        <LoadingModal topText={loaderTopText} bottomText={loaderBottomText} />
      )}
    </section>
  );
};

export default StartMenu;
