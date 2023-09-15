import styled from "styled-components";

export const IconWrapper = styled.div`
  height: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    height: 32px;
  }

  &:hover {
    filter: brightness(150%);
  }
`;
