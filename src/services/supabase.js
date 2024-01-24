import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ylbyrveaorcnddlubmjb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsYnlydmVhb3JjbmRkbHVibWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3MDYzODYsImV4cCI6MjAyMDI4MjM4Nn0.-dMHeyPrM_aBq9BxpbPAyeuHPpLlge3a6UMPALQS-zk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
