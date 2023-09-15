import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px 0px;
  max-width: 778px;
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
