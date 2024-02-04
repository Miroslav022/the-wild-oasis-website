import styled from "styled-components";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding-top: 20px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const PaginationButton = styled.button`
  /* background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")}; */
  background-color: var(--color-brand-600);
  color: var(--color-brand-50);
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  let page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  function prevPage() {
    page--;
    searchParams.set("page", page);
    setSearchParams(searchParams);
  }
  function nextPage() {
    page++;
    searchParams.set("page", page);
    setSearchParams(searchParams);
  }
  return (
    <StyledPagination>
      <div>bajooo</div>
      <Buttons>
        <PaginationButton onClick={prevPage}>
          <HiChevronLeft />
          <span>Prev</span>
        </PaginationButton>
        <PaginationButton onClick={nextPage}>
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
