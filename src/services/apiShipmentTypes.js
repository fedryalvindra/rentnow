import supabase from './supabase.js';

export async function getShipmentType(shipmentID) {
  let { data, error } = await supabase
    .from('ShipmentType')
    .select('*, Shipment(*)')
    .eq('shipmentID', shipmentID);

  if (error) throw new Error('Failed to get shipment types');

  return data;
}
