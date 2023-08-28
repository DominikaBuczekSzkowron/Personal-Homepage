import { ReactComponent as DangerIcon } from "../Icons/Danger.svg";
import { Button, ButtonText } from "../StyledButton/styled";
import { AddedText, ErrorWrap, MainText } from "./styled";

export const ErrorSection = () => (
  <ErrorWrap>
    <DangerIcon />
    <MainText>Ooops! Something went wrong...</MainText>
    <AddedText>
      Sorry, failed to load Github projects. You can check them directly on
      Github.
    </AddedText>
    <Button>
      <ButtonText a href="https://github.com/DominikaBuczekSzkowron">
        Go to Github
      </ButtonText>
    </Button>
  </ErrorWrap>
);
