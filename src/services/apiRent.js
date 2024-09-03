import supabase from './supabase.js';

export async function getRents() {
  let { data, error } = await supabase
    .from('Rent')
    .select('*, Customer(fullName, email), Car(carName, carImageURL)')
    .order('startDate', { ascending: false });

  if (error) throw new Error('Failed to get rents data');

  return data;
}
