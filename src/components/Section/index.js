import { Wrapper, Pretitle, Title, Content } from "./styled";

export const Section = ({ text, title, content }) => (
  <>
    <Wrapper>
      <Pretitle>{text}</Pretitle>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Wrapper>
  </>
);
