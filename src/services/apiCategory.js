import supabase from './supabase.js';

export async function getCategories() {
  let { data, error } = await supabase.from('Category').select('*');

  if (error) throw new Error('Failed to get categories');

  return data;
}
