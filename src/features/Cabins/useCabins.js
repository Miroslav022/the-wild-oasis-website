import { useQuery } from "@tanstack/react-query";
import { getAllCabins } from "../../services/apiCabins";

export function useCabins() {
  const { data: cabins, isLoading } = useQuery({
    queryKey: ["cabins"],
    queryFn: getAllCabins,
  });
  return { cabins, isLoading };
}
