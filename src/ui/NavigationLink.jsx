import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Li = styled.li`
  padding: 10px;
  margin-left: 10px;
`;

const StyledNavLink = styled(NavLink)`
  font-weight: 500;
`;

function NavigationLink({ path, text }) {
  return (
    <Li>
      <StyledNavLink to={path}>{text}</StyledNavLink>
    </Li>
  );
}

NavigationLink.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
};

export default NavigationLink;
