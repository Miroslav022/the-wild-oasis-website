import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignUp() {
  const navigate = useNavigate();
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: ({ fullName, email, password, nationality, nationalID }) =>
      signUpApi({ fullName, email, password, nationality, nationalID }),
    onSuccess: () => {
      toast.success("You are successfully registered, please Log in");
      navigate("/login");
    },
    onError: (error) => toast.error(error.message),
  });

  return { signUp, isLoading };
}
