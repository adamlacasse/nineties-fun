import { List, ListItem } from "react95";
import resumeIcon from "../../img/resume.png";

import "./ExperiencePanel.scss";

const ExperiencePanel = ({
  showExperiencePanel,
  setshowExperiencePanel,
  displayedWindows,
  setDisplayedWindows,
  setStartMenuOpen,
}) => {
  return (
    <List
      className={`panel ${showExperiencePanel ? "" : "hidden"}`}
      id="experience-panel"
      onMouseEnter={() => setshowExperiencePanel(true)}
      onMouseLeave={() => setshowExperiencePanel(false)}
      onClick={() => {
        setDisplayedWindows([...displayedWindows, "experience"]);
        setshowExperiencePanel(false);
        setStartMenuOpen(false);
      }}
    >
      <ListItem>
        <img src={resumeIcon} alt="resume icon" />
        <span>Experience</span>
      </ListItem>
    </List>
  );
};

export default ExperiencePanel;
