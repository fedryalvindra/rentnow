import BackButton from '../../ui/BackButton.jsx';
import InputLayout from '../../ui/InputLayout.jsx';
import { useCategory } from '../categories/useCategory.js';

import PageSpinner from '../../ui/PageSpinner.jsx';
import { useProduct } from './useProduct.js';
import Buttons from '../../ui/Buttons.jsx';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useUpdateProduct } from './useUpdateProduct.js';

function EditProductForm() {
  const { data: categories, isLoading: isLoadingCategories } = useCategory();
  const { data: product, isLoading: isLoadingProduct } = useProduct();
  const { mutate: updateProduct, isPending: isUpdatingProduct } =
    useUpdateProduct();

  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  if (isLoadingProduct || isLoadingCategories || isUpdatingProduct)
    return <PageSpinner />;

  const {
    id,
    productName,
    categoryID,
    productPrice,
    discount,
    stock,
    description,
    productImageURL,
  } = product;

  const onSubmit = (data) => {
    if (!data.productImageURL.length)
      updateProduct(
        {
          productObj: { ...data, id, productImageURL },
          productImage: false,
        },
        {
          onSuccess: () => {
            navigate(-1);
          },
        },
      );

    if (data.productImageURL.length)
      updateProduct(
        {
          productObj: { ...data, id, productImageURL: data.productImageURL[0] },
          productImage: productImageURL,
        },
        {
          onSuccess: () => {
            navigate(-1);
          },
        },
      );
  };

  return (
    <section className="space-y-2 p-2 sm:p-6 md:w-11/12 md:p-8 xl:w-10/12 xl:space-y-8 xl:p-6 2xl:w-9/12">
      <BackButton />

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="overflow-hidden sm:rounded-sm md:rounded-md">
          <div className="space-y-1 p-1 sm:grid sm:grid-cols-[1fr_11rem] sm:space-y-0 sm:rounded-md sm:border sm:bg-white md:grid-cols-[1fr_12rem] lg:p-2 xl:p-5 lg:grid-cols-[1fr_14rem] xl:grid-cols-[1fr_16rem] 2xl:grid-cols-[1fr_18rem]">
            <div className="space-y-2 sm:p-3 md:space-y-4 lg:space-y-5 xl:space-y-6">
              <InputLayout error={errors?.productName?.message}>
                <label className="font-semibold" htmlFor="productName">
                  Product Name
                </label>
                <input
                  className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
                  type="text"
                  id="productName"
                  autoComplete="off"
                  defaultValue={productName}
                  disabled={
                    isLoadingProduct || isLoadingCategories || isUpdatingProduct
                  }
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
                  className="w-20 rounded-sm bg-gray-400 p-1 text-white transition-all duration-200 hover:bg-gray-500 focus:ring-0 sm:rounded-md sm:p-2 lg:w-32"
                  id="categoryID"
                  defaultValue={categoryID}
                  disabled={
                    isLoadingProduct || isLoadingCategories || isUpdatingProduct
                  }
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
                  type="text"
                  id="productPrice"
                  autoComplete="off"
                  defaultValue={productPrice}
                  disabled={
                    isLoadingProduct || isLoadingCategories || isUpdatingProduct
                  }
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
                  type="text"
                  id="discount"
                  autoComplete="off"
                  defaultValue={discount}
                  disabled={
                    isLoadingProduct || isLoadingCategories || isUpdatingProduct
                  }
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
                  type="text"
                  className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
                  id="stock"
                  autoComplete="off"
                  defaultValue={stock}
                  disabled={
                    isLoadingProduct || isLoadingCategories || isUpdatingProduct
                  }
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
                  defaultValue={description}
                  disabled={
                    isLoadingProduct || isLoadingCategories || isUpdatingProduct
                  }
                  {...register('description', {
                    required: 'This field is required',
                  })}
                />
              </InputLayout>

              <InputLayout>
                <label className="font-semibold" htmlFor="productImageURL">
                  Update Image
                </label>
                <input
                  type="file"
                  className="text-gray sm:rounded-md-400 w-8/12 cursor-pointer bg-white file:cursor-pointer file:border-none file:bg-gray-400 file:p-1 file:px-3 file:text-white file:transition-all file:duration-200 file:hover:bg-gray-500 file:focus:outline-none sm:rounded-md"
                  id="productImageURL"
                  autoComplete="off"
                  disabled={
                    isLoadingProduct || isLoadingCategories || isUpdatingProduct
                  }
                  {...register('productImageURL')}
                  accept="image/*"
                />
              </InputLayout>
            </div>

            <aside className="flex justify-end sm:h-full sm:flex-none">
              <img
                className="h-10 w-20 content-center border bg-white object-scale-down sm:h-full sm:w-full sm:border-none lg:p-2"
                src={productImageURL}
                alt={productName}
              />
            </aside>
          </div>
        </div>

        <Buttons position="text-end">
          <button
            className="border font-semibold border-gray-700 p-1 px-2 text-xs md:text-sm xl:text-base"
            type="reset"
            onClick={() => navigate(-1)}
            disabled={
              isLoadingProduct || isLoadingCategories || isUpdatingProduct
            }
          >
            Back
          </button>
          <button
            className="bg-indigo-500 font-semibold p-1 px-2 text-xs text-white transition-all duration-200 hover:bg-indigo-600 md:text-sm xl:text-base"
            disabled={
              isLoadingProduct || isLoadingCategories || isUpdatingProduct
            }
          >
            Update
          </button>
        </Buttons>
      </form>
    </section>
  );
}

export default EditProductForm;
