import { getProduct } from './apiCars.js';
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

export async function createRent(createData) {
  const { data: createSomeRent, error: createError } = await supabase
    .from('Rent')
    .insert([{ ...createData }])
    .select()
    .single();

  if (createError) throw new Error('Failed to create some rent');

  const car = await getProduct(createSomeRent.carID);

  const { data, error } = await supabase
    .from('Rent')
    .update({
      totalPrice: (car?.carPrice - car?.discount) * createSomeRent.numDays,
    })
    .eq('id', createSomeRent.id)
    .select()
    .single();

  if (error) throw new Error('Failed to update total price rent');

  return data;
}

export async function updateRent({ updateData, id }) {
  const { data: updateSomeRent, error: errorUpdateSomeRent } = await supabase
    .from('Rent')
    .update({ ...updateData })
    .eq('id', id)
    .select()
    .single();

  if (errorUpdateSomeRent) throw new Error('Failed to update some rent');

  const car = await getProduct(updateSomeRent.carID);

  const { data, error } = await supabase
    .from('Rent')
    .update({
      totalPrice: (car?.carPrice - car?.discount) * updateSomeRent.numDays,
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw new Error('Failed to update rent');

  return data;
}

export async function deleteRent(id) {
  const { error } = await supabase.from('Rent').delete().eq('id', id);

  if (error) throw new Error('Failed to delete rent');
}
