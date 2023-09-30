import styled from "styled-components";

export const Sections = styled.article`
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    flex-direction: column;
    padding-bottom: 48px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  column-gap: 32px;
  row-gap: 32px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    row-gap: 16px;
  }
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 48px);
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: repeat(3, 32px);
    grid-gap: 16px;
  }
`;
