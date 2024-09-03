import {
  deleteImageGenerate,
  imageNameGenerate,
} from '../helpers/imageValidation.js';
import supabase, { supabaseUrl } from './supabase.js';

export async function getProduct(id) {
  let { data, error } = await supabase
    .from('Car')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw new Error('Car can not loaded');
  return data;
}

export async function getProducts() {
  let { data, error } = await supabase
    .from('Car')
    .select('*, Category(categoryName)')
    .order('created_at', {
      ascending: false,
    });

  if (error) throw new Error('Failed to get cars');
  return data;
}

export async function createProduct(productObj) {
  const { carName, carImageURL } = productObj;
  const imageName = imageNameGenerate(carName, carImageURL.name);
  const carImageURLPath = `${supabaseUrl}/storage/v1/object/public/Products/${imageName}`;
  const { data, error: productError } = await supabase
    .from('Car')
    .insert([{ ...productObj, carImageURL: carImageURLPath }])
    .select()
    .single();
  if (productError) throw new Error('Car can not be created');

  await uploadProductImage(imageName, carImageURL);

  return data;
}

export async function deleteProduct(id) {
  let { data, error: getProductError } = await supabase
    .from('Car')
    .select('carImageURL')
    .eq('id', id)
    .single();
  if (getProductError) throw new Error('Failed when getting car data');

  const { error } = await supabase.from('Car').delete().eq('id', id);
  if (error) throw new Error('Failed to delete car');

  const deletedImage = deleteImageGenerate(data?.carImageURL);
  await deleteProductImage(deletedImage);
}

export async function updateProduct({ productObj, carImage }) {
  if (!carImage) {
    console.log(carImage);
    const { data, error } = await supabase
      .from('Car')
      .update({ ...productObj })
      .eq('id', productObj.id)
      .select()
      .single();
    if (error) throw new Error('Car can not be updated');
    return data;
  }

  if (carImage) {
    const { carImageURL, carName } = productObj;
    const imageName = imageNameGenerate(carName, carImageURL.name);
    const carImageURLPath = `${supabaseUrl}/storage/v1/object/public/Products/${imageName}`;

    const { data, error } = await supabase
      .from('Car')
      .update({ ...productObj, carImageURL: carImageURLPath })
      .eq('id', productObj.id)
      .select()
      .single();
    if (error) throw new Error('Car can not be updated');

    const deletedImage = deleteImageGenerate(carImage);
    await deleteProductImage(deletedImage);
    await uploadProductImage(imageName, carImageURL);
    return data;
  }
}

async function deleteProductImage(deletedImage) {
  const { error: deletedImageError } = await supabase.storage
    .from('Products')
    .remove([deletedImage]);

  if (deletedImageError) throw new Error('Image can not be deleted');
}

async function uploadProductImage(imageName, carImageURL) {
  const { error: uploadImageError } = await supabase.storage
    .from('Products')
    .upload(imageName, carImageURL);

  if (uploadImageError) throw new Error('Image can not be uploaded');
}
