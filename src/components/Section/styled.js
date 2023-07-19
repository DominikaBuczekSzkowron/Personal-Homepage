import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px;
  max-width: 633px;
`;
export const Pretitle = styled.p`
  font-weight: 700;
  font-size: 12px;
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
