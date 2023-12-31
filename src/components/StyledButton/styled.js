import styled from "styled-components";

export const Button = styled.div`
  width: 154px;
  height: 49px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.additives};
  cursor: pointer;
  margin-left: 36px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: brightness(120%);
  }
`;

export const ButtonText = styled.a`
  color: ${({ theme }) => theme.color.buttonText};
  text-decoration: none;
`;
