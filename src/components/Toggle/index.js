import { useState } from "react";
import {
  SwitchInput,
  SwitchLabel,
  SwitchSpan,
  SwitchStrong,
  WrapToggle,
} from "./styled";
//import { ReactComponent as Brightness } from "../Icons/brightness.svg";

export const Toggle = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <WrapToggle>
      <SwitchLabel>
        <SwitchInput
          type="checkbox"
          defaultChecked={isToggled}
          onClick={callback}
        />
        <SwitchSpan />

        <SwitchStrong>{label}</SwitchStrong>
      </SwitchLabel>
    </WrapToggle>
  );
};
