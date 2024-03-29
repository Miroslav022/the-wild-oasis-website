import { PAGE_COUNT } from "../utils/helpers";
import supabase from "./supabase";

export async function getAllCabins(currentPage, search, filter, sort) {
  let query = supabase.from("cabins").select("*", { count: "exact" });

  //Search
  if (search) {
    query = query.like("name", `%${search}%`);
  }
  //Filter
  if (filter === "discount") {
    query = query.gt("discount", 0);
  }

  //Pagination
  if (currentPage) {
    const from = (currentPage - 1) * PAGE_COUNT;
    const to = from + PAGE_COUNT - 1;
    query = query.range(from, to);
  }

  //Sort
  if (sort.field && sort.direction) {
    query = query.order(sort.field, {
      ascending: sort.direction === "asc",
    });
  }
  let { data, error, count } = await query;
  // .from("cabins")
  // .select("*")
  // .range(from, to);
  if (error) throw new Error(error.message);

  return { data, count };
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
