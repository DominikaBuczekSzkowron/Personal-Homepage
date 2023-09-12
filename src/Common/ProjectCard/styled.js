import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
`;

export const Header = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.color.additives};
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-weight: 400;
  font-size: 18px;
`;

export const Links = styled.a`
  color: ${({ theme }) => theme.color.additives};
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  letter-spacing: 0.9px;

  &:active {
    text-decoration: underline;
  }

  &:hover {
    filter: brightness(150%);
  }
`;
