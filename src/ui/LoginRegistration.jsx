import styled from "styled-components";
import Button from "./Button";
// import { useUser } from "../hooks/useUser";
// import { useLogout } from "../features/Login/useLogout";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

function LoginRegistration() {
  // const { isAuthenticated, isLoading } = useUser();
  // const logout = useLogout();

  // function handleLogout() {
  //   logout();
  // }

  // if (isAuthenticated && !isLoading)
  //   return <Button onClick={handleLogout}>Log out</Button>;
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
