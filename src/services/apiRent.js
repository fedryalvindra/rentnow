import supabase from './supabase.js';

export async function getRents() {
  let { data, error } = await supabase
    .from('Rent')
    .select('*, Customer(fullName, email), Car(carName, carImageURL)')
    .order('startDate', { ascending: false });

  if (error) throw new Error('Failed to get rents data');

  return data;
}

export async function getRent(id) {
  let { data, error } = await supabase
    .from('Rent')
    .select('*, Customer(*), Car(*), Payment(*)')
    .eq('id', id)
    .single();

  if (error) throw new Error('Failed to get rent data');

  return data;
}
