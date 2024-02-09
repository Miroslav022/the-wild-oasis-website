import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

function Search() {
  const { register, handleSubmit } = useForm();
  const [searchParam, setSearchParam] = useSearchParams();

  function handleSearch(data) {
    console.log(data);
    let search = data.search;
    searchParam.set("search", search);
    setSearchParam(searchParam);
  }
  return (
    <form onSubmit={handleSubmit(handleSearch)}>
      <Flex>
        <Input type="search" placeholder="Search..." {...register("search")} />
        <Button>Search</Button>
      </Flex>
    </form>
  );
}

export default Search;
