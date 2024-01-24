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
      <Button variation="secondary" to="/login">
        Log in
      </Button>
      <Button to="/signup">Sing up</Button>
    </StyledContainer>
  );
}

export default LoginRegistration;