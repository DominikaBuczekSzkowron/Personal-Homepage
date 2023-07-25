import { usePortfolio } from "./usePortfolio";
import { Wrapper, Header, Content, Links, Container } from "./styled";

export const Card = ({ index }) => {
  const [fetchstate, fetchName, fetchDescription, fetchLInk, fetchDemo] =
    usePortfolio(index);

  return (
    <Wrapper>
      {fetchstate.state === "loading" ? (
        <div>Trwa ładowanie strony</div>
      ) : fetchstate.state === "error" ? (
        <div> Wystąpił nieoczekiwany błąd podczas ładowania! </div>
      ) : (
        <>
          <Header>{fetchName}</Header>
          <Content>{fetchDescription}</Content>
          <Container>
            <Content>Demo: </Content>
            <Links>{<a href={`${fetchDemo}`}>{fetchDemo}</a>}</Links>
          </Container>
          <Container>
            <Content>Code: </Content>
            <Links>{<a href={`${fetchLInk}`}>{fetchLInk}</a>}</Links>
          </Container>
        </>
      )}
    </Wrapper>
  );
};
