import { List, ListItem } from "react95";
import folderWithTools from "../../img/folder_tools.png";

import "./ProjectsPanel.scss";

const ProjectsPanel = ({
  showProjectsPanel,
  setShowProjectsPanel,
  displayedWindows,
  setDisplayedWindows,
  setStartMenuOpen,
}) => {
  return (
    <List
      className={`panel ${showProjectsPanel ? "" : "hidden"}`}
      id="projects-panel"
      onMouseEnter={() => setShowProjectsPanel(true)}
      onMouseLeave={() => setShowProjectsPanel(false)}
      onClick={() => {
        setDisplayedWindows([...displayedWindows, "projects"]);
        setShowProjectsPanel(false);
        setStartMenuOpen(false);
      }}
    >
      <ListItem>
        <img src={folderWithTools} alt="folder with tools" />
        <span>Project Samples</span>
      </ListItem>
    </List>
  );
};

export default ProjectsPanel;
