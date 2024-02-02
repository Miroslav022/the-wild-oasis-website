// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { findGuest } from "../../services/apiAuth";

// export function useGuest() {
//   const queryClient = useQueryClient();
//   const currentUser = queryClient.getQueryData(["user"]);

//   const email = currentUser.email;
//   const fullName = currentUser.user_metadata.fullName;

//   const { data, status } = useQuery({
//     queryKey: ["guest"],
//     queryFn: () => findGuest(email, fullName),
//   });
//   return { data, status };
// }
