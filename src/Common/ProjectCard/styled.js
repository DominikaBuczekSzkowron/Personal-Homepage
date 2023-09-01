import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
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

export const Links = styled.p`
  color: ${({ theme }) => theme.color.additives};
  text-decoration: underline;
  font-weight: 400;
  font-size: 18px;
`;
