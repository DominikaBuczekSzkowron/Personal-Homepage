import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 5px;
  margin-bottom: 36px;
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

export const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  letter-spacing: 0.9px;
`;

export const SkillItem = styled.li`
  color: ${({ theme }) => theme.color.text};
  padding-left: 1.5em;
  text-indent: -0.7em;

  &::before {
    content: "• ";
    color: ${({ theme }) => theme.color.additives};
  }
`;
