import {
  Wrapper,
  Pretitle,
  Title,
  Content,
  MailText,
  MailWrapper,
} from "./styled";

export const Section = ({ hideMail, text, title, content, email, params }) => (
  <>
    <Wrapper>
      <Pretitle>{text}</Pretitle>
      <MailWrapper hideMail={hideMail}>
        <MailText href={`mailto:${email}${params}`}>
          dominikabuczek@gmail.com
        </MailText>
      </MailWrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Wrapper>
  </>
);
