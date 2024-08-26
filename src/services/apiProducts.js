import supabase, { supabaseUrl } from './supabase.js';

export async function getProducts() {
  let { data, error } = await supabase
    .from('Product')
    .select('*, Category(categoryName)');

  if (error) throw new Error('Failed to get products');

  return data;
}

export async function createProduct(productObj) {
  // https://rnhifxqkvskwauivbgqn.supabase.co/storage/v1/object/public/Products/bone%20varsity.jpg
  console.log(productObj.productImageURL.name);

  const imageName =
    `${Math.random()}-${productObj.productName}-${productObj.productImageURL.name}`
      .replaceAll('/', '')
      .replaceAll(' ', '');

  const productImageURL = `${supabaseUrl}/storage/v1/object/public/Products/${imageName}`;

  const { data, error: productError } = await supabase
    .from('Product')
    .insert([{ ...productObj, productImageURL: productImageURL }])
    .select()
    .single();

  if (productError) throw new Error('Product can not be created');

  console.log(productObj.productImageURL);
  const { error: imageError } = await supabase.storage
    .from('Products')
    .upload(imageName, productObj.productImageURL);

  if (imageError) throw new Error('Image can not be uploaded');

  return data;
}
