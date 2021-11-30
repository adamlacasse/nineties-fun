import { useState } from "react";
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

const StartMenu = () => {
  const [biographyPanelOpen, setBiographyPanelOpen] = useState(false);
  const [experiencePanelOpen, setExperiencePanelOpen] = useState(false);
  const [projectsPanelOpen, setProjectsPanelOpen] = useState(false);
  const [startMenuLoaderOpen, setStartMenuLoaderOpen] = useState(false);

  const loaderBottomText = <p>Restarting your computer...</p>;

  return (
    <>
      <List className="start-menu">
        <div className="start-menu-contents">
          <div className="windows95">
            Windows<span>95</span>
          </div>
          <div className="list-item-container">
            <ListItem
              onMouseEnter={() => setBiographyPanelOpen(true)}
              onMouseLeave={() => setBiographyPanelOpen(false)}
            >
              <img src={globeIcon} alt="globe icon" />
              <span>Biography</span>
              <div class="arrow-right" />
            </ListItem>
            <ListItem
              onMouseEnter={() => setExperiencePanelOpen(true)}
              onMouseLeave={() => setExperiencePanelOpen(false)}
            >
              <img src={resumeIcon} alt="resume icon" />
              <span>Experience</span>
              <div class="arrow-right" />
            </ListItem>
            <ListItem
              onMouseEnter={() => setProjectsPanelOpen(true)}
              onMouseLeave={() => setProjectsPanelOpen(false)}
            >
              <img src={folderWithTools} alt="folder with tools" />
              <span>Project Samples</span>
              <div class="arrow-right" />
            </ListItem>
            <Divider className="divider" />
            <ListItem
              onClick={() => setStartMenuLoaderOpen(!startMenuLoaderOpen)}
            >
              <img src={pcIcon} alt="PC icon" />
              <span>Restart</span>
            </ListItem>
          </div>
        </div>
      </List>
      {biographyPanelOpen && <BiographyPanel />}
      {experiencePanelOpen && <ExperiencePanel />}
      {projectsPanelOpen && <ProjectsPanel />}
      {startMenuLoaderOpen && <LoadingModal bottomText={loaderBottomText} />}
    </>
  );
};

export default StartMenu;
