import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Filter({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentField = searchParams.get("discount")
    ? searchParams.get("discount")
    : "all";
  function handleClick(filterField, field) {
    searchParams.set(filterField, field);
    setSearchParams(searchParams);
  }
  return (
    <div>
      {options.map((option) => {
        return (
          <FilterButton
            onClick={() => handleClick(filterField, option.field)}
            key={option.field}
            active={currentField === option.field}
          >
            {option.value}
          </FilterButton>
        );
      })}
    </div>
  );
}

Filter.propTypes = {
  options: PropTypes.object,
  filterField: PropTypes.string,
};
export default Filter;
