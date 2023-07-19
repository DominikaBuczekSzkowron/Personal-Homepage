import { useState } from "react";
import { SwitchInput, SwitchLabel, SwitchSpan, SwitchStrong } from "./styled";

export const Toggle = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <SwitchLabel>
      <SwitchInput
        type="checkbox"
        defaultChecked={isToggled}
        onClick={callback}
      />
      <SwitchSpan />
      <SwitchStrong>{label}</SwitchStrong>
    </SwitchLabel>
  );
};
