import styled from "styled-components";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LoginRegistration from "./LoginRegistration";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0px auto;
  padding: 20px 30px;
`;

function Navigation() {
  return (
    <NavContainer>
      <Logo />
      <NavLinks />
      <LoginRegistration />
    </NavContainer>
  );
}

export default Navigation;
