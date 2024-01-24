import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
};

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 8px 24px;
    font-weight: 600;
  `,
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  ${(props) => variations[props.variation]};
  ${(props) => sizes[props.size]};
`;

// Button.defaultProps = {
//   variations: "primary",
//   sizes: "medium",
// };

function Button({ children, variation = "primary", size = "medium" }) {
  return (
    <StyledButton variation={variation} size={size}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variation: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
