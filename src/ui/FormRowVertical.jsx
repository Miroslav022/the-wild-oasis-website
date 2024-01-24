import styled from "styled-components";
import PropTypes from "prop-types";

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`;

const Label = styled.label`
  font-weight: 500;
`;

function FormRowVertical({ children, label }) {
  return (
    <StyledRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
    </StyledRow>
  );
}

FormRowVertical.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};

export default FormRowVertical;
