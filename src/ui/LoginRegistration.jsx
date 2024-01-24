import styled from "styled-components";
import Button from "./Button";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

function LoginRegistration() {
  return (
    <StyledContainer>
      <Button variation="secondary">Log in</Button>
      <Button>Sing in</Button>
    </StyledContainer>
  );
}

export default LoginRegistration;
