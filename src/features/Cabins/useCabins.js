import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllCabins } from "../../services/apiCabins";
import { useSearchParams } from "react-router-dom";
import { PAGE_COUNT } from "../../utils/helpers";

export function useCabins() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  //Filter
  const filter = !searchParams.get("discount")
    ? false
    : searchParams.get("discount");

  //Search
  const search = !searchParams.get("search")
    ? undefined
    : searchParams.get("search");

  //sort
  const sortParam = !searchParams.get("sortBy")
    ? "created_at-desc"
    : searchParams.get("sortBy");
  const [field, direction] = sortParam.split("-");
  const sort = { field, direction };
  //Pagination
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const { data: { data: cabins, count } = {}, isLoading } = useQuery({
    queryKey: ["cabins", currentPage, search, filter, sort],
    queryFn: () => getAllCabins(currentPage, search, filter, sort),
  });

  const pageCount = Math.ceil(count / PAGE_COUNT);
  if (currentPage < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["cabins", currentPage + 1],
      queryFn: () => getAllCabins(currentPage + 1),
    });
  }
  if (currentPage > 1) {
    queryClient.prefetchQuery({
      queryKey: ["cabins", currentPage - 1],
      queryFn: () => getAllCabins(currentPage - 1),
    });
  }
  return { cabins, isLoading, count };
}
