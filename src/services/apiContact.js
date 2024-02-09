import supabase from "./supabase";

export async function sendMessage(DataToSend) {
  const { data, error } = await supabase
    .from("contacts")
    .insert([DataToSend])
    .select();
  if (error) throw new Error(error.message);
  return data;
}
