import styled from "styled-components";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Container from "./Container";
import PostFooter from "./PostFooter";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

function Footer() {
  return (
    <Container>
      <StyledFooter>
        <Logo />
        <NavLinks />
        <PostFooter />
      </StyledFooter>
    </Container>
  );
}

export default Footer;
