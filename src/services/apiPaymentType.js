import supabase from './supabase.js';

export async function getPaymentType(id) {
  let { data, error } = await supabase
    .from('PaymentType')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw new Error('Failed to get payment data');
  return data;
}

export async function getPaymentTypes() {
  let { data, error } = await supabase
    .from('PaymentType')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw new Error('Failed to get payment types');

  const totalTypesPromises = data?.map(async (paymentType) => {
    const { error: totalTypeError, count } = await supabase
      .from('Payment')
      .select('paymentTypeID', { count: 'exact' })
      .eq('paymentTypeID', paymentType.id);

    if (totalTypeError) throw new Error('Failed to get total payment type');
    return count;
  });

  const totalTypes = await Promise.all(totalTypesPromises);

  return { data, totalTypes };
}

export async function createPaymentType(paymentType) {
  const { data, error } = await supabase
    .from('PaymentType')
    .insert([{ paymentType }])
    .select()
    .single();

  if (error) throw new Error('Failed to create new payment type');

  return data;
}

export async function deletePaymentType(id) {
  const { error } = await supabase.from('PaymentType').delete().eq('id', id);

  if (error)
    throw new Error(
      'Failed to delete payment type, check if there is payment that still align with payment type',
    );
}

export async function updatePaymentType({ id, paymentType }) {
  const { data, error } = await supabase
    .from('PaymentType')
    .update({ paymentType })
    .eq('id', id)
    .select();

  if (error) throw new Error('Failed to update payment type');

  return data;
}
