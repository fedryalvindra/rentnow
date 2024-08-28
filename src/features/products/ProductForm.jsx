import { useForm } from 'react-hook-form';
import BackButton from '../../ui/BackButton.jsx';
import Buttons from '../../ui/Buttons.jsx';
import InputLayout from '../../ui/InputLayout.jsx';
import PageSpinner from '../../ui/PageSpinner.jsx';
import { useCategory } from '../categories/useCategory.js';
import { useCreateProduct } from './useCreateProduct.js';
import { useNavigate } from 'react-router-dom';

function ProductForm() {
  const { data: categories, isLoading: isLoadingCategories } = useCategory();
  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  const { mutate: createProduct, isPending: isCreatingProduct } =
    useCreateProduct();

  if (isLoadingCategories || isCreatingProduct) return <PageSpinner />;

  const onSubmit = (product) => {
    createProduct(
      { ...product, productImageURL: product.productImageURL[0] },
      {
        onSuccess: () => {
          navigate('/products');
        },
      },
    );
  };

  return (
    <section className="space-y-2 p-2 sm:space-y-6 sm:p-6 md:w-11/12 md:p-8 xl:w-10/12 xl:p-6 2xl:w-9/12">
      <BackButton />

      <div className="overflow-hidden sm:rounded-lg sm:border">
        <h1 className="hidden font-semibold sm:block sm:bg-indigo-600 sm:p-2 sm:pl-4 sm:text-sm sm:text-white md:text-base lg:pl-6 lg:text-lg">
          Create Product
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 sm:bg-white sm:p-4 lg:space-y-5 lg:p-6 2xl:space-y-6"
        >
          <InputLayout error={errors?.productName?.message}>
            <label htmlFor="productName">Product Name</label>
            <input
              className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
              type="text"
              id="productName"
              autoComplete="off"
              {...register('productName', {
                required: 'This field is required',
              })}
            />
          </InputLayout>

          <InputLayout error={errors?.categoryID?.message}>
            <label htmlFor="categoryID">Category</label>
            <select
              className="w-20 bg-indigo-500 text-white p-1 lg:w-32 focus:ring-0"
              id="categoryID"
              {...register('categoryID', {
                required: 'This field is required',
              })}
            >
              {categories?.map((category) => (
                <option className='bg-white text-gray-700' value={category.id} key={category.id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </InputLayout>

          <InputLayout error={errors?.productPrice?.message}>
            <label htmlFor="productPrice">Price</label>
            <input
              className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
              type="text"
              id="productPrice"
              autoComplete="off"
              {...register('productPrice', {
                required: 'This field is required',
                min: {
                  value: 500,
                  message: 'Product minimal price is 500',
                },
              })}
            />
          </InputLayout>

          <InputLayout error={errors?.discount?.message}>
            <label htmlFor="discount">Discount</label>
            <input
              className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
              type="text"
              id="discount"
              autoComplete="off"
              defaultValue={0}
              {...register('discount', {
                required: 'This field is required',
                min: {
                  value: 0,
                  message: 'Product discount minimal 0',
                },
                validate: (discount) =>
                  Number(discount) < Number(getValues().productPrice) ||
                  'Discount must not higher than product price',
              })}
            />
          </InputLayout>

          <InputLayout error={errors?.stock?.message}>
            <label htmlFor="stock">Stock</label>
            <input
              type="text"
              className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
              id="stock"
              autoComplete="off"
              {...register('stock', {
                required: 'This field is required',
                min: {
                  value: 1,
                  message: 'Product stock minimal 1',
                },
              })}
            />
          </InputLayout>

          <InputLayout error={errors?.description?.message}>
            <label htmlFor="description">Description</label>
            <textarea
              className="h-48 w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
              id="description"
              autoComplete="off"
              {...register('description', {
                required: 'This field is required',
              })}
            />
          </InputLayout>

          <InputLayout error={errors?.productImageURL?.message}>
            <label htmlFor="productImageURL">Image</label>
            <input
              type="file"
              className="text-gray sm:rounded-md-400 w-8/12 cursor-pointer bg-white file:cursor-pointer file:border-none file:bg-indigo-500 file:p-1 file:px-3 file:text-white file:transition-all file:duration-200 file:hover:bg-indigo-600 file:focus:outline-none sm:rounded-md"
              id="productImageURL"
              autoComplete="off"
              {...register('productImageURL', {
                required: 'This field is required',
              })}
              accept="image/*"
            />
          </InputLayout>

          <Buttons position="text-end">
            <button
              className="border border-gray-700 p-1 px-2 text-xs md:text-sm xl:text-base"
              type="reset"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
            <button className="bg-indigo-500 p-1 px-2 text-xs text-white transition-all duration-200 hover:bg-indigo-600 md:text-sm xl:text-base">
              Confirm
            </button>
          </Buttons>
        </form>
      </div>
    </section>
  );
}

export default ProductForm;
