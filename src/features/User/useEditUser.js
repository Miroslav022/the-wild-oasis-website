import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUserData } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useEditUser() {
  const queryClient = useQueryClient();
  const { mutate: editUser, isLoading: isUpdating } = useMutation({
    mutationFn: (data) => editUserData(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      toast.success("You are successfully updated account");
    },
    onError: (error) => toast.error(error.message),
  });
  return { editUser, isUpdating };
}
