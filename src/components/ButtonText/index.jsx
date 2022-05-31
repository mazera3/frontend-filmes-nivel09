import { Container } from "./styles";

export function ButtonTex({ title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {title}
    </Container>
  );
}
