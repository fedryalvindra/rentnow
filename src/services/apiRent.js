import { PAGE_SIZE } from '../ui/Pagination.jsx';
import { getProduct } from './apiCars.js';
import supabase from './supabase.js';

export async function getRents(status, sortBy, page, search) {
  let query = supabase
    .from('Rent')
    .select('*, Customer(fullName, email), Car(carName, carImageURL)', {
      count: 'exact',
    });

  if (status !== 'all') query = query.eq('status', status);

  if (sortBy === 'date-desc')
    query = query.order('startDate', { ascending: false });
  if (sortBy === 'date-asc')
    query = query.order('startDate', { ascending: true });
  if (sortBy === 'totalPrice-desc')
    query = query.order('totalPrice', { ascending: false });
  if (sortBy === 'totalPrice-asc')
    query = query.order('totalPrice', { ascending: true });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  if (search) {
    let { data: carID, error } = await supabase
      .from('Car')
      .select('id')
      .eq('plateNumber', search)
      .single();
    if (error) throw new Error('There is no car with that plate number');
    query = query.eq('carID', carID.id);
  }

  let { data, error, count } = await query;

  if (error) throw new Error('Failed to get rents data');

  return { data, count };
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
