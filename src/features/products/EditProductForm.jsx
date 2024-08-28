import BackButton from '../../ui/BackButton.jsx';
import InputLayout from '../../ui/InputLayout.jsx';
import { useCategory } from './useCategory.js';

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
          <h1 className="hidden bg-sky-400 p-2 pl-4 text-xs text-white sm:block lg:text-sm xl:text-base">
            Update Product
          </h1>
          <div className="space-y-1 p-1 sm:grid sm:grid-cols-[1fr_11rem] sm:space-y-0 sm:bg-white md:grid-cols-[1fr_12rem] lg:grid-cols-[1fr_14rem] xl:grid-cols-[1fr_16rem] 2xl:grid-cols-[1fr_18rem]">
            <div className="space-y-2 sm:p-3">
              <InputLayout error={errors?.productName?.message}>
                <label htmlFor="productName">Product Name</label>
                <input
                  className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
                  type="text"
                  id="productName"
                  autoComplete="off"
                  defaultValue={productName}
                  {...register('productName', {
                    required: 'This field is required',
                  })}
                />
              </InputLayout>
              <InputLayout error={errors?.categoryID?.message}>
                <label htmlFor="categoryID">Category</label>
                <select
                  className="w-20 bg-gray-200 p-1 lg:w-32"
                  id="categoryID"
                  defaultValue={categoryID}
                  {...register('categoryID', {
                    required: 'This field is required',
                  })}
                >
                  {categories?.map((category) => (
                    <option value={category.id} key={category.id}>
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
                  defaultValue={productPrice}
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
                  defaultValue={discount}
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
                  defaultValue={stock}
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
                  defaultValue={description}
                  {...register('description', {
                    required: 'This field is required',
                  })}
                />
              </InputLayout>

              <InputLayout>
                <label htmlFor="productImageURL">Update Image</label>
                <input
                  type="file"
                  className="text-gray sm:rounded-md-400 w-8/12 cursor-pointer bg-white file:cursor-pointer file:border-none file:bg-sky-500 file:p-1 file:px-3 file:text-white file:focus:outline-none sm:rounded-md"
                  id="productImageURL"
                  autoComplete="off"
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
            className="border border-gray-700 p-1 px-2 text-xs md:text-sm xl:text-base"
            type="reset"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button className="bg-sky-400 p-1 px-2 text-xs text-white md:text-sm xl:text-base">
            Update
          </button>
        </Buttons>
      </form>
    </section>
  );
}

export default EditProductForm;
