import {
  deleteImageGenerate,
  imageNameGenerate,
} from '../helpers/imageValidation.js';
import supabase, { supabaseUrl } from './supabase.js';

export async function getProduct(id) {
  let { data, error } = await supabase
    .from('Product')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw new Error('Product can not loaded');
  return data;
}

export async function getProducts() {
  let { data, error } = await supabase
    .from('Product')
    .select('*, Category(categoryName)')
    .order('created_at', {
      ascending: false,
    });

  if (error) throw new Error('Failed to get products');
  return data;
}

export async function createProduct(productObj) {
  const { productName, productImageURL } = productObj;
  const imageName = imageNameGenerate(productName, productImageURL.name);
  const productImageURLPath = `${supabaseUrl}/storage/v1/object/public/Products/${imageName}`;
  const { data, error: productError } = await supabase
    .from('Product')
    .insert([{ ...productObj, productImageURL: productImageURLPath }])
    .select()
    .single();
  if (productError) throw new Error('Product can not be created');

  await uploadProductImage(imageName, productImageURL);

  return data;
}

export async function deleteProduct(id) {
  let { data, error: getProductError } = await supabase
    .from('Product')
    .select('productImageURL')
    .eq('id', id)
    .single();
  if (getProductError) throw new Error('Failed when getting product data');

  const { error } = await supabase.from('Product').delete().eq('id', id);
  if (error) throw new Error('Failed to delete product');

  const deletedImage = deleteImageGenerate(data?.productImageURL);
  await deleteProductImage(deletedImage);
}

export async function updateProduct({ productObj, productImage }) {
  if (!productImage) {
    const { data, error } = await supabase
      .from('Product')
      .update({ ...productObj })
      .eq('id', productObj.id)
      .select()
      .single();
    if (error) throw new Error('Product can not be updated');
    return data;
  }

  if (productImage) {
    const { productImageURL, productName } = productObj;
    const imageName = imageNameGenerate(productName, productImageURL.name);
    const productImageURLPath = `${supabaseUrl}/storage/v1/object/public/Products/${imageName}`;

    const { data, error } = await supabase
      .from('Product')
      .update({ ...productObj, productImageURL: productImageURLPath })
      .eq('id', productObj.id)
      .select()
      .single();
    if (error) throw new Error('Product can not be updated');

    const deletedImage = deleteImageGenerate(productImage);
    await deleteProductImage(deletedImage);
    await uploadProductImage(imageName, productImageURL);
    return data;
  }
}

async function deleteProductImage(deletedImage) {
  const { error: deletedImageError } = await supabase.storage
    .from('Products')
    .remove([deletedImage]);

  if (deletedImageError) throw new Error('Image can not be deleted');
}

async function uploadProductImage(imageName, productImageURL) {
  const { error: uploadImageError } = await supabase.storage
    .from('Products')
    .upload(imageName, productImageURL);

  if (uploadImageError) throw new Error('Image can not be uploaded');
}
