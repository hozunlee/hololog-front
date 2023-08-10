import { supabase } from "$lib/supabase/supabaseClient";

export async function load() {
  const { data } = await supabase.from("cakes").select('id, author, from, item, speaker');
  return {
    cakes: data ?? [],
  };
}