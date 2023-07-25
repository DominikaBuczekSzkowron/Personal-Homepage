import { ReactComponent as GitIcon } from "../../github.svg";
import { Header, PortfolioTitle, PortfolioSubtitle } from "./styled";

export const PortfolioHeader = ({ title, subtitle }) => (
  <Header>
    <GitIcon />
    <PortfolioTitle>{title}</PortfolioTitle>
    <PortfolioSubtitle>{subtitle}</PortfolioSubtitle>
  </Header>
);
