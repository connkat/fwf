import React, { useState } from "react";
import Switch from "react-switch";

import logo from "../assets/fwf-logo.jpeg";

interface Props {
  partyModeToggleHandler: (checked: boolean) => boolean;
}

const Header = (props: Props): React.ReactElement => {
  const [partyModeChecked, setPartyModeChecked] = useState(false);

  const handlePartyMode = (checked: boolean): void => {
    setPartyModeChecked(checked);
    props.partyModeToggleHandler(checked);
  };

  return (
    <div className="navbar">
      <div className="logo-wrapper">
        <a href="https://www.facebook.com/FreezerburnWrestling">
          <img src={logo} alt="logo" className="logo" />
        </a>
      </div>
      <div className="title">
        <h1>WHAT HAPPENED TO THE FWF???</h1>
      </div>
      <div className="partyMode">
        <p>plz don't touch this</p>
        <Switch
          name="partyModeToggle"
          checked={partyModeChecked}
          onChange={handlePartyMode}
        />
      </div>
    </div>
  );
};

export default Header;
