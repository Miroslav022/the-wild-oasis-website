import { useMutation } from "@tanstack/react-query";
import { sendMessage as sendMessageApi } from "../../services/apiContact";
import toast from "react-hot-toast";

export function useContact() {
  const { mutate: sendMessage, isLoading } = useMutation({
    mutationFn: (dataToSend) => sendMessageApi(dataToSend),
    onSuccess: () => {
      toast.success("You have successfully sent a message");
    },
    onError: (error) => toast.error(error.message),
  });

  return { sendMessage, isLoading };
}
