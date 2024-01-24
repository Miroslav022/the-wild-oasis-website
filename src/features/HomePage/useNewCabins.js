import { useQuery } from "@tanstack/react-query";
import { getNewestCabins } from "../../services/apiCabins";

export function useNewCabins() {
  const {
    data: newCabins,
    status,
    error,
  } = useQuery({
    queryKey: ["newestCabins"],
    queryFn: getNewestCabins,
  });
  return { newCabins, status, error };
}
