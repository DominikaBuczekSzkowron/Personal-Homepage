import { IconWrapper } from "./styled";

export const Icon = ({ link, icon }) => (
  <IconWrapper>
    <a href={`${link}`}>{icon}</a>
  </IconWrapper>
);
