import styled from "styled-components";

export const Sections = styled.article`
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 36px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  column-gap: 32px;
  row-gap: 32px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;
