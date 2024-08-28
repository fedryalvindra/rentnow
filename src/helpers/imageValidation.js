import { supabaseUrl } from '../services/supabase.js';

export function deleteImageGenerate(image) {
  const imageUrl = image.replace(
    `${supabaseUrl}/storage/v1/object/public/Products/`,
    '',
  );
  return imageUrl;
}

export function imageNameGenerate(productName, imageUrl) {
  const imageName = `${Math.random()}-${productName}-${imageUrl}`
    .replaceAll('/', '')
    .replaceAll(' ', '');

  return imageName;
}
