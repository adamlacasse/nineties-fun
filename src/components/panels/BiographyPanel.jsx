import { List, ListItem } from "react95";

import "./BiographyPanel.scss";

const BiographyPanel = ({ biographyPanelState, biographyPanelState: { mouseInListItem, mouseInPanel }, setBiographyPanelState, displayedWindows, setDisplayedWindows }) => {
  return (
    <List 
      className={`panel ${mouseInListItem || mouseInPanel ? '' : 'hidden'}`} 
      id="biography"
      onMouseLeave={() => setBiographyPanelState({ ...biographyPanelState, mouseInPanel: false })}
      onClick={() => {
        setDisplayedWindows([...displayedWindows, 'generic']);
        setBiographyPanelState({ mouseInListItem: false, mouseInPanel: false });
      }}
    >
      <ListItem>Biography!</ListItem>
    </List>
  );
};

export default BiographyPanel;
