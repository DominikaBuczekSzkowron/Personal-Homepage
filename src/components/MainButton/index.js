import { EmailButton, EmailButtonText } from "./styled";

export const MainButton = ({ email, subject = "", body = "" }) => {
  let params = subject || body ? "?" : "";
  if (subject) params += "subject=" + encodeURIComponent(subject);
  if (body)
    params += `${subject ? "&" : ""}
    body=${encodeURIComponent(body)}`;

  return (
    <EmailButton>
      <a href={`mailto:${email}${params}`}>
        <EmailButtonText>HIRE ME!</EmailButtonText>
      </a>
    </EmailButton>
  );
};
