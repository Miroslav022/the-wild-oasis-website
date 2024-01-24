import styled from "styled-components";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LoginRegistration from "./LoginRegistration";
import Container from "./Container";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Navigation() {
  return (
    <Container>
      <NavContainer>
        <Logo />
        <NavLinks />
        <LoginRegistration />
      </NavContainer>
    </Container>
  );
}

export default Navigation;
