import { ButtonText } from "../../components/StyledButton/styled";

export const MailMe = ({ email, subject = "", body = "" }) => {
  let params = subject || body ? "?" : "";
  if (subject) params += "subject=" + encodeURIComponent(subject);
  if (body)
    params += `${subject ? "&" : ""}
    body=${encodeURIComponent(body)}`;

  return <ButtonText href={`mailto:${email}${params}`}>HIRE ME!</ButtonText>;
};
