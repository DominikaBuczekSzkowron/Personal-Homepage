import { useState } from "react";
import {
  SwitchInput,
  SwitchLabel,
  SwitchSpan,
  SwitchStrong,
  WrapToggle,
} from "./styled";

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
        <SwitchSpan defaultChecked={isToggled} />

        <SwitchStrong>{label}</SwitchStrong>
      </SwitchLabel>
    </WrapToggle>
  );
};
