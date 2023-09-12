import styled from "styled-components";

export const Container = styled.div`
  max-width: 1216px;
  margin: auto;
  word-break: break-word;
  padding: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipod}) {
    padding: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 12px;
  }
`;
