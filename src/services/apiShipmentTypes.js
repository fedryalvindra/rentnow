import supabase from './supabase.js';

export async function getShipmentType(shipmentID) {
  let { data, error } = await supabase
    .from('ShipmentType')
    .select('*, Shipment(*)')
    .eq('shipmentID', shipmentID)
    .order('created_at', { ascending: false });

  if (error) throw new Error('Failed to get shipment types');

  return data;
}

export async function createShipmentType(shipmentType) {
  const { data, error } = await supabase
    .from('ShipmentType')
    .insert([shipmentType])
    .select();

  if (error) throw new Error('Shipment type can not be created');
  return data;
}

export async function deleteShipmentType(id) {
  const { error } = await supabase.from('ShipmentType').delete().eq('id', id);

  if (error) throw new Error('Failed to delete shipment type');
}

export async function updateShipmentType({ field, id }) {
  const { data, error } = await supabase
    .from('ShipmentType')
    .update(field)
    .eq('id', id)
    .select()
    .single();

  if (error) throw new Error('Failed to update the shipment type');

  return data;
}
