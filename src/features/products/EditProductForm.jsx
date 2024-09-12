import BackButton from '../../ui/BackButton.jsx';
import InputLayout from '../../ui/InputLayout.jsx';
import { useCategory } from '../categories/useCategory.js';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button.jsx';
import Buttons from '../../ui/Buttons.jsx';
import PageSpinner from '../../ui/PageSpinner.jsx';
import { useProduct } from './useProduct.js';
import { useUpdateProduct } from './useUpdateProduct.js';

function EditProductForm() {
  const { data: categories, isLoading: isLoadingCategories } = useCategory();
  const { data: car, isLoading: isLoadingCar } = useProduct();
  const { mutate: updateProduct, isPending: isUpdatingProduct } =
    useUpdateProduct();

  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  if (isUpdatingProduct || isLoadingCar || isLoadingCategories)
    return <PageSpinner />;

  const {
    id,
    carName,
    categoryID,
    carPrice,
    discount,
    status,
    description,
    carImageURL,
    plateNumber,
  } = car;

  const onSubmit = (data) => {
    if (!data.carImageURL.length)
      updateProduct(
        {
          productObj: { ...data, id, carImageURL },
          carImage: false,
        },
        {
          onSuccess: () => {
            navigate(-1);
          },
        },
      );

    if (data.carImageURL.length)
      updateProduct(
        {
          productObj: { ...data, id, carImageURL: data.carImageURL[0] },
          carImage: carImageURL,
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
          <div className="space-y-1 p-1 sm:grid sm:grid-cols-[1fr_11rem] sm:space-y-0 sm:rounded-md sm:border sm:bg-white md:grid-cols-[1fr_12rem] lg:grid-cols-[1fr_14rem] lg:p-2 xl:grid-cols-[1fr_16rem] xl:p-5 2xl:grid-cols-[1fr_18rem]">
            <div className="space-y-2 sm:p-3 md:space-y-4 lg:space-y-5 xl:space-y-6">
              <InputLayout error={errors?.carName?.message}>
                <label className="font-semibold" htmlFor="carName">
                  Car Name
                </label>

                <input
                  className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
                  type="text"
                  id="carName"
                  autoComplete="off"
                  defaultValue={carName}
                  disabled={
                    isLoadingCar || isLoadingCategories || isUpdatingProduct
                  }
                  {...register('carName', {
                    required: 'This field is required',
                  })}
                />
              </InputLayout>

              <InputLayout error={errors?.plateNumber?.message}>
                <label className="font-semibold" htmlFor="plateNumber">
                  Plate Number
                </label>

                <input
                  className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
                  type="text"
                  id="plateNumber"
                  autoComplete="off"
                  defaultValue={plateNumber}
                  disabled={
                    isLoadingCar || isLoadingCategories || isUpdatingProduct
                  }
                  {...register('plateNumber', {
                    required: 'This field is required',
                  })}
                />
              </InputLayout>

              <InputLayout error={errors?.categoryID?.message}>
                <label className="font-semibold" htmlFor="categoryID">
                  Category
                </label>
                <select
                  className="ray-500 w-20 rounded-sm border p-1 transition-all duration-200 focus:ring-0 sm:rounded-md sm:p-2 lg:w-32"
                  id="categoryID"
                  defaultValue={categoryID}
                  disabled={
                    isLoadingCar || isLoadingCategories || isUpdatingProduct
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
              <InputLayout error={errors?.carPrice?.message}>
                <label className="font-semibold" htmlFor="carPrice">
                  Price per day
                </label>
                <input
                  className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
                  type="number"
                  id="carPrice"
                  autoComplete="off"
                  defaultValue={carPrice}
                  disabled={
                    isLoadingCar || isLoadingCategories || isUpdatingProduct
                  }
                  {...register('carPrice', {
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
                  defaultValue={discount}
                  disabled={
                    isLoadingCar || isLoadingCategories || isUpdatingProduct
                  }
                  {...register('discount', {
                    required: 'This field is required',
                    min: {
                      value: 0,
                      message: 'Product discount minimal 0',
                    },
                    validate: (discount) =>
                      Number(discount) < Number(getValues().carPrice) ||
                      'Discount must not higher than product price',
                  })}
                />
              </InputLayout>

              <InputLayout error={errors?.status?.message}>
                <label className="font-semibold" htmlFor="status">
                  Category
                </label>
                <select
                  className="ray-500 w-20 rounded-sm border p-1 transition-all duration-200 focus:ring-0 sm:rounded-md sm:p-2 lg:w-32"
                  id="status"
                  defaultValue={status}
                  disabled={
                    isLoadingCar || isLoadingCategories || isUpdatingProduct
                  }
                  {...register('status', {
                    required: 'This field is required',
                  })}
                >
                  <option className="bg-white text-gray-700" value="available">
                    Available
                  </option>

                  <option
                    className="bg-white text-gray-700"
                    value="unavailable"
                  >
                    Unavailable
                  </option>

                  <option
                    className="bg-white text-gray-700"
                    value="maintenance"
                  >
                    Maintenance
                  </option>
                </select>
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
                    isLoadingCar || isLoadingCategories || isUpdatingProduct
                  }
                  {...register('description', {
                    required: 'This field is required',
                  })}
                />
              </InputLayout>

              <InputLayout>
                <label className="font-semibold" htmlFor="carImageURL">
                  Update Image
                </label>
                <input
                  type="file"
                  className="text-gray sm:rounded-md-400 w-8/12 cursor-pointer bg-white file:cursor-pointer file:border-none file:bg-gray-700 file:p-1 file:px-3 file:text-white file:transition-all file:duration-200 file:hover:bg-gray-800 file:focus:outline-none sm:rounded-md"
                  id="carImageURL"
                  autoComplete="off"
                  disabled={
                    isLoadingCar || isLoadingCategories || isUpdatingProduct
                  }
                  {...register('carImageURL')}
                  accept="image/*"
                />
              </InputLayout>
            </div>

            <aside className="flex justify-end sm:h-full sm:flex-none">
              <img
                className="h-10 w-20 content-center border bg-white object-scale-down sm:h-full sm:w-full sm:border-none lg:p-2"
                src={carImageURL}
                alt={carName}
              />
            </aside>
          </div>
        </div>

        <Buttons position="text-end">
          <Button
            type="back"
            disabled={isLoadingCar || isLoadingCategories || isUpdatingProduct}
          />
          <Button
            type="form"
            disabled={isLoadingCar || isLoadingCategories || isUpdatingProduct}
          >
            Update
          </Button>
        </Buttons>
      </form>
    </section>
  );
}

export default EditProductForm;
