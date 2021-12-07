import { List, ListItem } from "react95";

import "./BiographyPanel.scss";

const BiographyPanel = ({ showBiographyPanel, setShowBiographyPanel, displayedWindows, setDisplayedWindows }) => {
  return (
    <List 
      className={`panel ${showBiographyPanel ? '' : 'hidden'}`} 
      id="biography"
      onMouseEnter={() => setShowBiographyPanel(true)}
      onMouseLeave={() => setShowBiographyPanel(false)}
      onClick={() => {
        setDisplayedWindows([...displayedWindows, 'generic']);
        setShowBiographyPanel(false);
      }}
    >
      <ListItem>Biography!</ListItem>
    </List>
  );
};

export default BiographyPanel;
