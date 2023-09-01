import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 16px;
  box-shadow: 0px 16px 58px 0px #090a3308;
  box-shadow: 0px -2px 50px 0px #090a3305;
  border: 6px solid ${({ theme }) => theme.color.border};
  max-width: 592px;
  height: 322px;
  background-color: ${({ theme }) => theme.color.backgroundCard};
  padding: 20px;
`;
