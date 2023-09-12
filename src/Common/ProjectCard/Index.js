import { Container, Content, Header, Links } from "./styled";

export const ProjectCard = ({ name, description, html_url, homepage }) => {
  return (
    <>
      <Header>{name}</Header>
      <Content>{description}</Content>
      <Container>
        <Content>Code: </Content>
        {<Links href={`${html_url}`}>{html_url}</Links>}
      </Container>
      <Container>
        <Content>Demo: </Content>
        {<Links href={`${homepage}`}>{homepage}</Links>}
      </Container>
    </>
  );
};
