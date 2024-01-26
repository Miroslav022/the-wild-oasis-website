import supabase from "./supabase";

export async function getAllCabins() {
  let { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) throw new Error(error.message);
  return cabins;
}

export async function getNewestCabins() {
  let { data: cabins, error } = await supabase
    .from("cabins")
    .select("*")
    .order("created_at", {
      ascending: false,
    })
    .range(0, 5);
  if (error) throw new Error(error.message);
  return cabins;
}
