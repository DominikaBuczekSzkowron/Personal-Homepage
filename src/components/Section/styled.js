import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px 0px 36px 36px;
  max-width: 778px;

  ${({ alignLeft }) =>
    alignLeft &&
    css`
      padding: 36px 0px;
    `}
`;

export const MailWrapper = styled.div`
  &:hover {
    filter: contrast(50%);
  }
  ${({ hideMail }) =>
    hideMail &&
    css`
      display: none;
    `}
`;

export const Pretitle = styled.p`
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.color.text};
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 38px;
  color: ${({ theme }) => theme.color.headers};
`;

export const Content = styled.div`
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.color.text};
`;

export const MailText = styled.a`
  font-weight: 900;
  font-size: 38px;
  color: ${({ theme }) => theme.color.headers};
  text-decoration: none;

  &:hover {
    cursor: pointer;
    filter: brightness(200%);
  }
`;
