import { useQuery } from "@tanstack/react-query";
import { getAllCabins } from "../../services/apiCabins";
import { useSearchParams } from "react-router-dom";

export function useCabins() {
  const [searchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const { data: cabins, isLoading } = useQuery({
    queryKey: ["cabins"],
    queryFn: () => getAllCabins(currentPage),
  });
  return { cabins, isLoading };
}
