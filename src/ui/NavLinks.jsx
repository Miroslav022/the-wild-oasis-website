import styled from "styled-components";
import NavigationLink from "./NavigationLink";

const Ul = styled.ul`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

function NavLinks() {
  return (
    <Ul>
      <NavigationLink path="/home" text="Home" />
      <NavigationLink path="/cabins" text="Cabins" />
      <NavigationLink path="/about" text="About us" />
      <NavigationLink path="/contact" text="Contact" />
    </Ul>
  );
}

export default NavLinks;
