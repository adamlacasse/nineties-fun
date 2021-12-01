import { useEffect } from "react";
import {
  Window,
  Button,
  WindowHeader,
  Toolbar,
  WindowContent,
  Panel,
} from "react95";

import "./WindowGeneric.scss";

import moveAndResizeWindow from "../../helpers/moveAndResizeWindow";

export default function (props) {
  useEffect(() => {
    moveAndResizeWindow("generic");
  }, []);

  return (
    <Window resizable className="window" id="generic">
      <WindowHeader className="window-header">
        <span>react95.exe</span>
        <Button onClick={() => props.setDisplayedWindows(props.displayedWindows.filter(window => window !== 'generic'))}>
          <span className="close-icon">X</span>
        </Button>
      </WindowHeader>
      <WindowContent>
        <p>
          When you set &quot;resizable&quot; prop, there will be drag handle in
          the bottom right corner (but resizing itself must be handled by you
          tho!)
        </p>
      </WindowContent>
      <Panel variant="well" className="footer">
        Put some useful informations here
      </Panel>
    </Window>
  );
}
