import supabase from './supabase.js';

export async function getPayments(id) {
  let { data, error } = await supabase
    .from('Payment')
    .select('*')
    .eq('paymentTypeID', id)
    .order('created_at', { ascending: false });

  if (error) throw new Error('Failed to get payments data');

  return data;
}

export async function createPayment({ paymentName, id }) {
  const { data, error } = await supabase
    .from('Payment')
    .insert([{ paymentName, paymentTypeID: id }])
    .select()
    .single();

  if (error) throw new Error('Failed to add new payment');

  return data;
}

export async function deletePayment(id) {
  const { error } = await supabase.from('Payment').delete().eq('id', id);

  if (error) throw new Error('Failed to remove payment');
}

export async function updatePayment({ paymentName, id }) {
  const { data, error } = await supabase
    .from('Payment')
    .update({ paymentName })
    .eq('id', id)
    .select()
    .single();

  if (error) throw new Error('Failed to update payment');

  return data;
}
