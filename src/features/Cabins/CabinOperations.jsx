import TableOperations from "../../ui/TableOperations";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Filter from "../../ui/Filter";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

function CabinOperations() {
  const { register, handleSubmit } = useForm();
  const [searchParam, setSearchParam] = useSearchParams();

  function handleSearch(data) {
    console.log(data);
    let search = data.search;
    searchParam.set("search", search);
    setSearchParam(searchParam);
  }

  const Options = [
    {
      field: "discount",
      value: "Discount",
    },
    {
      field: "all",
      value: "All",
    },
  ];
  return (
    <TableOperations>
      <Filter options={Options} filterField="discount" />
      <form onSubmit={handleSubmit(handleSearch)}>
        <Flex>
          <Input
            type="search"
            placeholder="Search..."
            {...register("search")}
          />
          <Button>Search</Button>
        </Flex>
      </form>
    </TableOperations>
  );
}

export default CabinOperations;
