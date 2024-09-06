import supabase from './supabase.js';

export async function createCustomer(customer) {
  let { data: phoneNumber } = await supabase
    .from('Customer')
    .select('phoneNum')
    .eq('phoneNum', customer.phoneNum)
    .single();
  if (phoneNumber) throw new Error('Phone number already exist!');
  let { data: email } = await supabase
    .from('Customer')
    .select('phoneNum')
    .eq('email', customer.email)
    .single();
  if (email) throw new Error('Email already exist!');

  const { data, error } = await supabase
    .from('Customer')
    .insert([customer])
    .select()
    .single();
  if (error) throw new Error('Failed to create new customer');
  return data;
}

export async function getCustomers(gmail) {
  let { data, error } = await supabase
    .from('Customer')
    .select('*')
    .order('created_at', { ascending: false })
    .textSearch('email', gmail)
    .single();

  if (error) throw new Error('There is no customer with that email');

  return data;
}
