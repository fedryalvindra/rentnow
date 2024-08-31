import supabase from './supabase.js';

export async function getShipment(shipmentID) {
  let { data, error } = await supabase
    .from('Shipment')
    .select('*')
    .eq('id', shipmentID)
    .single();
  if (error) throw new Error('Failed to get shipment data');
  return data;
}

export async function getShipments() {
  let { data, error } = await supabase
    .from('Shipment')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw new Error('Failed to get shipments data');

  const totalTypesPromises = data?.map(async (shipment) => {
    const { error: totalTypeError, count } = await supabase
      .from('ShipmentType')
      .select('shipmentID', { count: 'exact' })
      .eq('shipmentID', shipment.id);

    if (totalTypeError) throw new Error('Failed to get total shipment types');
    return count;
  });

  const totalTypes = await Promise.all(totalTypesPromises);

  return { data, totalTypes };
}

export async function createShipment(shipmentName) {
  const { data, error } = await supabase
    .from('Shipment')
    .insert([{ shipmentName }])
    .select();

  if (error) throw new Error('Shipment can not be created');
  return data;
}

export async function updateShipment({ id, shipmentName }) {
  const { data, error } = await supabase
    .from('Shipment')
    .update({ shipmentName })
    .eq('id', id)
    .select()
    .single();

  if (error) throw new Error('Failed to update category');

  return data;
}

export async function deleteShipment(id) {
  const { error } = await supabase.from('Shipment').delete().eq('id', id);
  if (error) throw new Error('Failed to delete shipment');
}
