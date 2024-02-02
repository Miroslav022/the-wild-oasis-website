import supabase, { supabaseUrl } from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  let { error } = await supabase.auth.signOut();
  if (error) return new Error(error.message);
}

export async function signUp({
  fullName,
  email,
  password,
  nationality,
  nationalID,
}) {
  //Make user
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  //Make guest
  const { data: guestData, error: guestError } = await supabase
    .from("guests")
    .insert([{ fullName, email, nationality, nationalID }])
    .select()
    .single();

  if (guestError) throw new Error(guestError.message);

  //update user put id to the user_metadata
  const { data: updateUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      id: guestData.id,
    },
  });

  if (error2) throw new Error(error2.message);

  return { data, updateUser };
}

export async function editUserData({ fullName, password, avatar }) {
  let dataForEdit = {};
  if (password) dataForEdit.password = password;
  if (fullName) dataForEdit.data = { fullName };
  console.log(dataForEdit);

  const { data, error } = await supabase.auth.updateUser(dataForEdit);
  if (error) throw new Error(error.message);
  if (!avatar) return data;

  let fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  const { data: updateUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });
  if (error2) throw new Error(error2.message);
  return updateUser;
}

// export async function findGuest(fullName, email) {
//   console.log(fullName, email);
//   let { data: guests, error } = await supabase
//     .from("guests")
//     .select("*")
//     .eq("fullName", "Jonas Schmedtmann")
//     .single();
//   console.log(guests);
//   if (error) throw new Error(error.message);

//   return guests;
// }
