import supabase from "./supabase";

export async function bookingCabin(formData) {
  const { data, error } = await supabase
    .from("bookings")
    .insert([formData])
    .select();
  if (error) throw new Error(error.message);

  return data;
}
