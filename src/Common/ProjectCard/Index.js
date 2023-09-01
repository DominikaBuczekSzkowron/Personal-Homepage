import { Container, Content, Header, Links } from "./styled";

export const ProjectCard = ({ name, description, html_url, homepage }) => {
  return (
    <>
      <Header>{name}</Header>
      <Content>{description}</Content>
      <Container>
        <Content>Demo: </Content>
        <Links>{<a href={`${html_url}`}>{html_url}</a>}</Links>
      </Container>
      <Container>
        <Content>Code: </Content>
        <Links>{<a href={`${homepage}`}>{homepage}</a>}</Links>
      </Container>
    </>
  );
};
