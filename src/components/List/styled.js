import styled from "styled-components";

export const Wrapper = styled.div`
  box-shadow: 0px 16px 58px 0px #090a3308;
  box-shadow: 0px -2px 50px 0px #090a3305;
  max-width: 1216px;
  background-color: ${({ theme }) => theme.color.backgroundCard};
  padding: 20px;
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.color.headers};
  font-weight: 900;
  font-size: 30px;
  padding: 0 16px 16px 16px;
  border-bottom: solid 1px;
  border-color: ${({ theme }) => theme.color.horLine};
`;
