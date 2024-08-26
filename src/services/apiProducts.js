import supabase from './supabase.js';

export async function getProducts() {
  let { data, error } = await supabase
    .from('Product')
    .select('*, Category(categoryName)');

  if (error) throw new Error('Failed to get products');

  return data;
}
