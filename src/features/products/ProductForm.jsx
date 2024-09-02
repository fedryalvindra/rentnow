import { useForm } from 'react-hook-form';
import BackButton from '../../ui/BackButton.jsx';
import Buttons from '../../ui/Buttons.jsx';
import InputLayout from '../../ui/InputLayout.jsx';
import PageSpinner from '../../ui/PageSpinner.jsx';
import { useCategory } from '../categories/useCategory.js';
import { useCreateProduct } from './useCreateProduct.js';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button.jsx';

function ProductForm() {
  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;
  const { data: categories, isLoading: isLoadingCategories } = useCategory();
  const { mutate: createProduct, isPending: isCreatingProduct } =
    useCreateProduct();

  const navigate = useNavigate();
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 sm:bg-white sm:p-4 lg:space-y-5 lg:p-6 2xl:space-y-6"
        >
          <InputLayout error={errors?.productName?.message}>
            <label className="font-semibold" htmlFor="productName">
              Product Name
            </label>
            <input
              className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
              type="text"
              id="productName"
              autoComplete="off"
              placeholder="Product name"
              disabled={isLoadingCategories || isCreatingProduct}
              {...register('productName', {
                required: 'This field is required',
              })}
            />
          </InputLayout>

          <InputLayout error={errors?.categoryID?.message}>
            <label className="font-semibold" htmlFor="categoryID">
              Category
            </label>
            <select
              className="w-20 rounded-sm border p-1 transition-all duration-200 focus:outline-none md:rounded-md md:p-2 lg:w-32"
              id="categoryID"
              disabled={isLoadingCategories || isCreatingProduct}
              {...register('categoryID', {
                required: 'This field is required',
              })}
            >
              {categories?.map((category) => (
                <option
                  className="bg-white text-gray-700"
                  value={category.id}
                  key={category.id}
                >
                  {category.categoryName}
                </option>
              ))}
            </select>
          </InputLayout>

          <InputLayout error={errors?.productPrice?.message}>
            <label className="font-semibold" htmlFor="productPrice">
              Price
            </label>
            <input
              className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
              type="number"
              id="productPrice"
              autoComplete="off"
              placeholder="Min 500"
              disabled={isLoadingCategories || isCreatingProduct}
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
            <label className="font-semibold" htmlFor="discount">
              Discount
            </label>
            <input
              className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
              type="number"
              id="discount"
              autoComplete="off"
              defaultValue=""
              disabled={isLoadingCategories || isCreatingProduct}
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
            <label className="font-semibold" htmlFor="stock">
              Stock
            </label>
            <input
              type="number"
              className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
              id="stock"
              autoComplete="off"
              placeholder="Min 1"
              disabled={isLoadingCategories || isCreatingProduct}
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
            <label className="font-semibold" htmlFor="description">
              Description
            </label>
            <textarea
              className="h-48 w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
              id="description"
              autoComplete="off"
              placeholder="Description"
              disabled={isLoadingCategories || isCreatingProduct}
              {...register('description', {
                required: 'This field is required',
              })}
            />
          </InputLayout>

          <InputLayout error={errors?.productImageURL?.message}>
            <label className="font-semibold" htmlFor="productImageURL">
              Image
            </label>
            <input
              type="file"
              className="text-gray sm:rounded-md-400 w-8/12 cursor-pointer bg-white file:cursor-pointer file:border-none file:bg-gray-700 file:p-1 file:px-3 file:text-white file:transition-all file:duration-200 file:hover:bg-gray-800 file:focus:outline-none sm:rounded-md"
              id="productImageURL"
              autoComplete="off"
              disabled={isLoadingCategories || isCreatingProduct}
              {...register('productImageURL', {
                required: 'This field is required',
              })}
              accept="image/*"
            />
          </InputLayout>

          <Buttons position="text-end">
            <Button
              type="back"
              disabled={isLoadingCategories || isCreatingProduct}
            />
            <Button
              type="form"
              disabled={isLoadingCategories || isCreatingProduct}
            >
              Confirm
            </Button>
          </Buttons>
        </form>
      </div>
    </section>
  );
}

export default ProductForm;
