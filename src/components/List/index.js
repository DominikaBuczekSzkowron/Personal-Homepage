import { Header, SkillItem, SkillsList, Wrapper } from "./styled";

export const List = ({ title, data }) => (
  <>
    <Wrapper>
      <Header>{title}</Header>
      <SkillsList>
        {data.map((element) => (
          <SkillItem key={element.id}>{element.skill}</SkillItem>
        ))}
      </SkillsList>
    </Wrapper>
  </>
);
