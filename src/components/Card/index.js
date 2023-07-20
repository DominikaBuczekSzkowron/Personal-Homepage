import { Wrapper, Header, Content, Links, Container } from "./styled";

export const Card = ({ title, content, demoLink, codeLink }) => (
  <Wrapper>
    <Header>{title}</Header>
    <Content>{content}</Content>
    <Container>
      <Content>Demo: </Content>
      <Links>{demoLink}</Links>
    </Container>
    <Container>
      <Content>Code: </Content>
      <Links>{codeLink}</Links>
    </Container>
  </Wrapper>
);
