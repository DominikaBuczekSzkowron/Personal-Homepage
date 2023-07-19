import { Header, Wrapper } from "./styled";

export const List = ({ title, data }) => (
  <>
    <Wrapper>
      <Header>{title}</Header>
      <ul>
        <li>{data}</li>
      </ul>
    </Wrapper>
  </>
);
