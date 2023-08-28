import { Button, ButtonText } from "../../components/StyledButton/styled";

export const MainButton = ({ email, subject = "", body = "" }) => {
  let params = subject || body ? "?" : "";
  if (subject) params += "subject=" + encodeURIComponent(subject);
  if (body)
    params += `${subject ? "&" : ""}
    body=${encodeURIComponent(body)}`;

  return (
    <Button>
      <ButtonText href={`mailto:${email}${params}`}>HIRE ME!</ButtonText>
    </Button>
  );
};
