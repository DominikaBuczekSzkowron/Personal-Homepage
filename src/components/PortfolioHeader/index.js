import { Icon } from "../Icons";
import { ReactComponent as GitIcon } from "../Icons/github.svg";
import { Header, PortfolioTitle, PortfolioSubtitle } from "./styled";

export const PortfolioHeader = ({ title, subtitle }) => (
  <Header>
    <Icon
      link="https://github.com/DominikaBuczekSzkowron"
      icon={<GitIcon />}
    ></Icon>
    <PortfolioTitle>{title}</PortfolioTitle>
    <PortfolioSubtitle>{subtitle}</PortfolioSubtitle>
  </Header>
);
