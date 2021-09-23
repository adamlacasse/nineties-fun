import { useState } from "react";
import { List, ListItem, Divider } from "react95";
import resumeIcon from "../img/resume.png";
import pcIcon from "../img/pc.ico";
import folderWithTools from "../img/folder_tools.png";
import globeIcon from "../img/globe.png";
import BiographyPanel from "./panels/BiographyPanel";
import ExperiencePanel from "./panels/ExperiencePanel";
import ProjectsPanel from "./panels/ProjectsPanel";

import "./StartMenu.scss";

const StartMenu = () => {
  const [biographyPanelOpen, setBiographyPanelOpen] = useState(false);
  const [experiencePanelOpen, setExperiencePanelOpen] = useState(false);
  const [projectsPanelOpen, setProjectsPanelOpen] = useState(false);

  return (
    <>
      <List className="start-menu">
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
          onClick={() => alert('This does nothing!')}
        >
          <img src={pcIcon} alt="PC icon" />
          <span>Restart</span>
        </ListItem>
      </List>
      {biographyPanelOpen && <BiographyPanel />}
      {experiencePanelOpen && <ExperiencePanel />}
      {projectsPanelOpen && <ProjectsPanel />}
    </>
  );
};

export default StartMenu;
