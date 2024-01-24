import LoginForm from "../features/Login/LoginForm";
import Container from "../ui/Container";
// import HeadingContainer from "../ui/HeadingContainer";
import styled from "styled-components";
import Heading from "../ui/Heading";

const LoginLayout = styled.div`
  background-color: var(--color-grey-50);
  display: grid;
  grid-template-columns: 48rem;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
`;

function Login() {
  return (
    <Container>
      <LoginLayout>
        <StyledHeading as="h1">Log in</StyledHeading>
        <LoginForm />
      </LoginLayout>
    </Container>
  );
}

export default Login;
