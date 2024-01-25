import { useMutation } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogout() {
  const { mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("You are successfully logged out");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return logout;
}
