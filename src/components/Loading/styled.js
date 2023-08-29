import { styled, keyframes } from "styled-components";

const Rotating = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const RingPart = styled.div`
  position: absolute;
  width: 75px;
  height: 75px;

  border: 8px solid transparent;
  border-radius: 50%;
  animation: ${Rotating} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: transparent transparent ${({ theme }) => theme.color.border}
    transparent;

  @media (max-width: 770px) {
    width: 35px;
    height: 35px;
    border: 5px solid transparent;
    border-radius: 50%;
    animation: ${Rotating} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: transparent transparent ${({ theme }) => theme.color.border}
      transparent;
  }
`;

export const Ring = styled.div`
  width: 91px;
  height: 91px;
  margin: 0px auto;

  & ${RingPart}:nth-child(1) {
    border-color: ${({ theme }) => theme.color.spinner};
  }

  & ${RingPart}:nth-child(2) {
    animation-delay: -0.45s;
  }
  & ${RingPart}:nth-child(3) {
    animation-delay: -0.3s;
  }
  & ${RingPart}:nth-child(4) {
    animation-delay: -0.15s;
  }
`;

export const DetailLoadingWrap = styled.div`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 770px) {
    min-height: 200px;
  }
`;
