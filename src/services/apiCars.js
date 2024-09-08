import {
  deleteImageGenerate,
  imageNameGenerate,
} from '../helpers/imageValidation.js';
import { PAGE_SIZE } from '../ui/Pagination.jsx';
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

export async function getProductsSelect() {
  const { data, error } = await supabase
    .from('Car')
    .select('*, Category(categoryName)')
    .order('created_at', { ascending: false });

  if (error) throw new Error('Failed to get cars');
  return data;
}

export async function getProducts(status, category, sortBy, page, search) {
  let query = supabase
    .from('Car')
    .select('*, Category(categoryName)', { count: 'exact' });

  if (status !== 'all') query = query.eq('status', status);
  if (category !== 'all') {
    const { data: categoryData, error: categoryError } = await supabase
      .from('Category')
      .select('id')
      .eq('categoryName', category)
      .single();

    if (categoryError) throw new Error('Failed to fetch category');
    query = query.eq('categoryID', categoryData.id);
  }
  if (sortBy === 'date-desc')
    query = query.order('created_at', { ascending: false });
  if (sortBy === 'date-asc')
    query = query.order('created_at', { ascending: true });

  if (sortBy === 'carPrice-desc')
    query = query.order('carPrice', { ascending: false });
  if (sortBy === 'carPrice-asc')
    query = query.order('carPrice', { ascending: true });
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }
  if (search) query = query.textSearch('plateNumber', search);

  let { data, error, count } = await query;

  if (error) throw new Error('Failed to get cars');
  return { data, count };
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
