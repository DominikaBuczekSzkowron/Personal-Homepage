import styled from "styled-components";

export const Image = styled.img`
  max-height: 384px;
  max-width: 384px;
  border-radius: 50% 50% 50% 50%;
  padding: 1px;
  aspect-ratio: 1 /1;
  padding-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    margin-bottom: 0px;
  }
`;
