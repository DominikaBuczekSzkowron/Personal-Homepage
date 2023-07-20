import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

export const PortfolioTitle = styled.h2`
  color: ${({ theme }) => theme.color.headers};
  font-weight: 900;
  font-size: 30px;
  margin: 2px;
`;

export const PortfolioSubtitle = styled.h3`
  color: ${({ theme }) => theme.color.headers};
  font-weight: 400;
  font-size: 20px;
  margin: 2px;
`;
