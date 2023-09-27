import styled from "styled-components";

export const WrapToggle = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 26px;
`;

export const SwitchSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.color.labelBackground};
  border: 1px solid ${({ theme }) => theme.color.labelBorder};
  transition: 0.3s;
  border-radius: 30px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 2px;
    background-image: ${({ theme }) => `url(${theme.icon.brightnessIcon});`};
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${({ theme }) => theme.color.brightnessIconBorder};
    border-radius: 50%;
    transition: 0.3s;
  }
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background: ${({ theme }) => theme.color.horLine};
  }

  &:checked + span:before {
    transform: translateX(20px);
  }
`;

export const SwitchStrong = styled.strong`
  @media (min-width: ${({ theme }) => theme.breakpoint.mini}) {
    position: absolute;
    color: ${({ theme }) => theme.color.text};
    right: 100%;
    padding-right: 12px;
    width: max-content;
    line-height: 30px;
    margin-left: 10px;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    color: red;
    display: none;
  }
`;
