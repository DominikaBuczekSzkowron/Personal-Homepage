import { Header, Wrapper } from "./styled";

export const List = ({ title, data }) => (
  <>
    <Wrapper>
      <Header>{title}</Header>
      <ul>
        {data.map((element) => (
          <li key={element.id}>{element.skill}</li>
        ))}
      </ul>
    </Wrapper>
  </>
);
