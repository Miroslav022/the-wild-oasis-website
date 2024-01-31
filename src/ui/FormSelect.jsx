import styled from "styled-components";

const Select = styled.select`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  & option {
    border-radius: 0px;
  }
`;

function FormSelect() {
  return (
    <Select>
      <option value="">visa</option>
      <option value="">master</option>
      <option value="">debit</option>
    </Select>
  );
}

export default FormSelect;
