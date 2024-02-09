import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import Search from "../../ui/Search";

function CabinOperations() {
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
  const sortByOptions = [
    {
      field: "maxCapacity-desc",
      value: "Capacity descending",
    },
    {
      field: "maxCapacity-asc",
      value: "Capacity asc",
    },
    {
      field: "regularPrice-desc",
      value: "Price descending",
    },
    {
      field: "regularPrice-asc",
      value: "Price ascending",
    },
  ];

  return (
    <TableOperations>
      <Filter options={Options} filterField="discount" />
      <SortBy options={sortByOptions} />
      <Search />
    </TableOperations>
  );
}

export default CabinOperations;
