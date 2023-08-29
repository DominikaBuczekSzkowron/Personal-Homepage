import { usePortfolio } from "./usePortfolio";
import { Wrapper, Header, Content, Links, Container } from "./styled";
import { ErrorSection } from "../../components/Error/index";
import { LoadingView } from "../Loading";

export const Card = ({ index }) => {
  const [fetchstate, fetchName, fetchDescription, fetchLInk, fetchDemo] =
    usePortfolio(index);

  return (
    <Wrapper>
      {fetchstate.state === "loading" ? (
        <LoadingView />
      ) : fetchstate.state === "error" ? (
        <ErrorSection />
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
