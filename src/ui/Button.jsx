import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  ${(props) => variations[props.variation]};
  ${(props) => sizes[props.size]};
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  ${(props) => variations[props.variation]};
  ${(props) => sizes[props.size]};
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

function Button({
  children,
  variation = "primary",
  size = "medium",
  to = null,
  disabled = false,
  onClick = null,
}) {
  if (to)
    return (
      <StyledLink to={to} variation={variation} size={size}>
        {children}
      </StyledLink>
    );

  return (
    <StyledButton
      variation={variation}
      size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variation: PropTypes.string,
  size: PropTypes.string,
  to: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
