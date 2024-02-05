import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllCabins } from "../../services/apiCabins";
import { useSearchParams } from "react-router-dom";
import { PAGE_COUNT } from "../../utils/helpers";

export function useCabins() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const { data: { data: cabins, count } = {}, isLoading } = useQuery({
    queryKey: ["cabins", currentPage],
    queryFn: () => getAllCabins(currentPage),
  });
  console.log(count);

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
  return { cabins, isLoading };
}
