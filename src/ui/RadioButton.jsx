import styled from "styled-components";
// import PropTypes from "prop-types";

// const StyledCheckbox = styled.div`
//   display: flex;
//   gap: 1.6rem;

//   & input[type="radio"] {
//     height: 2.4rem;
//     width: 2.4rem;
//     outline-offset: 2px;
//     transform-origin: 0;
//     accent-color: var(--color-brand-600);
//   }

//   & input[type="radio"]:disabled {
//     accent-color: var(--color-brand-600);
//   }

//   & label {
//     flex: 1;

//     display: flex;
//     align-items: center;
//     gap: 0.8rem;
//   }
// `;

const RadioButton = styled.input`
  height: 2.4rem;
  width: 2.4rem;
  & input[type="radio"] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
  }

  & input[type="radio"]:disabled {
    accent-color: var(--color-brand-600);
  }
`;
export default RadioButton;
