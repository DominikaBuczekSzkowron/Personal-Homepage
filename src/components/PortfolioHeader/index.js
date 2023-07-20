import { Icon } from "../GitIcon";
import { Header, PortfolioTitle, PortfolioSubtitle } from "./styled";

export const PortfolioHeader = ({ title, subtitle }) => (
  <Header>
    <Icon />
    <PortfolioTitle>{title}</PortfolioTitle>
    <PortfolioSubtitle>{subtitle}</PortfolioSubtitle>
  </Header>
);
