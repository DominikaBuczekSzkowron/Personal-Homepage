import styled from "styled-components";

export const EmailButton = styled.div`
  width: 154px;
  max-height: 49px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.additives};
  cursor: pointer;
  margin-left: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmailButtonText = styled.p`
  color: ${({ theme }) => theme.color.buttonText};
  text-decoration: none;
`;
