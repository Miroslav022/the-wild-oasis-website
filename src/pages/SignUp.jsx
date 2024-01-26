import styled from "styled-components";
import SignUpForm from "../features/SignUp/SignUpForm";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

const LoginLayout = styled.div`
  /* background-color: var(--color-grey-50); */
  display: grid;
  grid-template-columns: 48rem;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
`;

function SignUp() {
  return (
    <Container>
      <LoginLayout>
        <StyledHeading>Registration</StyledHeading>
        <SignUpForm />
      </LoginLayout>
    </Container>
  );
}

export default SignUp;
