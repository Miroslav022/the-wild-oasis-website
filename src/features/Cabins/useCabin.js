import { useQuery } from "@tanstack/react-query";
import { getSingleCabin } from "../../services/apiCabins";
import { useParams } from "react-router-dom";

export function useCabin() {
  const { id } = useParams();

  const { data: cabin, status } = useQuery({
    queryKey: ["cabin", id],
    queryFn: () => getSingleCabin(id),
  });
  return { cabin, status };
}
