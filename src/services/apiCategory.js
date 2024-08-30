import supabase from './supabase.js';

export async function getCategories() {
  let { data, error } = await supabase
    .from('Category')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw new Error('Failed to get categories');

  return data;
}

export async function createCategory(categoryName) {
  const { data, error } = await supabase
    .from('Category')
    .insert([{ categoryName }])
    .select()
    .single();

  if (error) throw new Error('Failed to create category');

  return data;
}

export async function updateCategory({ id, categoryName }) {
  const { data, error } = await supabase
    .from('Category')
    .update({ categoryName })
    .eq('id', id)
    .select()
    .single();

  if (error) throw new Error('Failed to update category');

  return data;
}

export async function deleteCategory(id) {
  const { error } = await supabase.from('Category').delete().eq('id', id);

  if (error)
    throw new Error(
      'Failed to delete category, Check if category still associated in product',
    );
}
