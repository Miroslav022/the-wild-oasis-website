import styled from "styled-components";
import Button from "./Button";
import { useUser } from "../hooks/useUser";
import { useLogout } from "../features/Login/useLogout";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledUserBlock = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  border-left: 1px solid var(--color-grey-300);
  padding-left: 10px;
`;

const ImgBlock = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  /* border-radius: 100%; */
  /* object-fit: cover; */
`;
const Img = styled.img`
  border-radius: 100%;
  object-fit: cover;
`;
const UserName = styled.p`
  font-weight: 600;
`;

function LoginRegistration() {
  const { isAuthenticated, isLoading, data } = useUser();
  const logout = useLogout();

  function handleLogout() {
    logout();
  }

  if (isAuthenticated && !isLoading) {
    const { fullName, avatar } = data.user_metadata;
    return (
      <StyledUserBlock>
        <UserName>{fullName}</UserName>
        <ImgBlock>
          <Img src={avatar ? avatar : "default-user.jpg"} alt="" />
        </ImgBlock>
        <Button onClick={handleLogout}>Log out</Button>
      </StyledUserBlock>
    );
  }
  if (!isAuthenticated && !isLoading)
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
