import { useMutation } from "@tanstack/react-query";
import { bookingCabin as bookingCabinApi } from "../../services/apiBooking";
import toast from "react-hot-toast";

export function useCreateBooking() {
  const { mutate: bookingCabin, isLoading } = useMutation({
    mutationFn: (formData) => bookingCabinApi(formData),
    onSuccess: () => {
      toast.success(`you have successfully booked the cabin`);
    },
    onError: (error) => toast.error(error.message),
  });

  return { bookingCabin, isLoading };
}
