import { PAGE_COUNT } from "../utils/helpers";
import supabase from "./supabase";

export async function getAllCabins(currentPage) {
  const from = (currentPage - 1) * PAGE_COUNT;
  const to = from + PAGE_COUNT - 1;
  let { data: cabins, error } = await supabase
    .from("cabins")
    .select("*")
    .range(from, to);
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

export async function getSingleCabin(id) {
  let { data: cabin, error } = await supabase
    .from("cabins")
    .select("*")
    .single()
    .eq("id", id);

  if (error) throw new Error(error.message);

  return cabin;
}
