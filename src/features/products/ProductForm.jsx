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

  const onSubmit = (car) => {
    createProduct(
      { ...car, carImageURL: car.carImageURL[0] },
      {
        onSuccess: () => {
          navigate('/cars');
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
          <InputLayout error={errors?.carName?.message}>
            <label className="font-semibold" htmlFor="carName">
              Car Name
            </label>
            <input
              className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
              type="text"
              id="carName"
              autoComplete="off"
              placeholder="Car name"
              disabled={isLoadingCategories || isCreatingProduct}
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
              placeholder="Plat number"
              disabled={isLoadingCategories || isCreatingProduct}
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

          <InputLayout error={errors?.carPrice?.message}>
            <label className="font-semibold" htmlFor="carPrice">
              Price per day
            </label>
            <input
              className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
              type="number"
              id="carPrice"
              autoComplete="off"
              placeholder="Min 500"
              disabled={isLoadingCategories || isCreatingProduct}
              {...register('carPrice', {
                required: 'This field is required',
                min: {
                  value: 500,
                  message: 'Car minimal price is 500',
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
              placeholder="Input 0 for no discount"
              disabled={isLoadingCategories || isCreatingProduct}
              {...register('discount', {
                required: 'This field is required',
                min: {
                  value: 0,
                  message: 'Car discount minimal 0',
                },
                validate: (discount) =>
                  Number(discount) < Number(getValues().carPrice) ||
                  'Discount must not higher than Car price',
              })}
            />
          </InputLayout>

          <InputLayout error={errors?.categoryID?.message}>
            <label className="font-semibold" htmlFor="status">
              Status
            </label>
            <select
              className="w-20 rounded-sm border p-1 transition-all duration-200 focus:outline-none md:rounded-md md:p-2 lg:w-32"
              id="categoryID"
              disabled={isLoadingCategories || isCreatingProduct}
              {...register('status', {
                required: 'This field is required',
              })}
            >
              <option className="bg-white text-gray-700" value="available">
                Available
              </option>
              <option className="bg-white text-gray-700" value="unavailable">
                Unavailable
              </option>

              <option className="bg-white text-gray-700" value="maintenance">
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
              placeholder="Description"
              disabled={isLoadingCategories || isCreatingProduct}
              {...register('description', {
                required: 'This field is required',
              })}
            />
          </InputLayout>

          <InputLayout error={errors?.carImageURL?.message}>
            <label className="font-semibold" htmlFor="carImageURL">
              Image
            </label>
            <input
              type="file"
              className="text-gray sm:rounded-md-400 w-8/12 cursor-pointer bg-white file:cursor-pointer file:border-none file:bg-gray-700 file:p-1 file:px-3 file:text-white file:transition-all file:duration-200 file:hover:bg-gray-800 file:focus:outline-none sm:rounded-md"
              id="carImageURL"
              autoComplete="off"
              disabled={isLoadingCategories || isCreatingProduct}
              {...register('carImageURL', {
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
