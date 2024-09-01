import supabase from './supabase.js';

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
