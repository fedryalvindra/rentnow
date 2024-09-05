import { useForm } from 'react-hook-form';
import Button from '../../ui/Button.jsx';
import Buttons from '../../ui/Buttons.jsx';
import InputLayout from '../../ui/InputLayout.jsx';
import { calculateNumDays } from '../../helpers/dateValidation.js';
import { useUpdateRent } from './useUpdateRent.js';
import { useNavigate } from 'react-router-dom';
import PageSpinner from '../../ui/PageSpinner.jsx';

const statusOption = ['unconfirmed', 'paid', 'rented', 'complete'];

function RentForm({
  rent: {
    startDate,
    endDate,
    status,
    Car: { id: carID },
  },
  cars,
}) {
  const { mutate: updateRent, isPending: isLoadingUpdateRent } =
    useUpdateRent();

  const { register, getValues, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  if (isLoadingUpdateRent) return <PageSpinner />;

  const handleUpdate = (data) => {
    const numDays = calculateNumDays(data.startDate, data.endDate);
    updateRent({ ...data, numDays });
    navigate(`/rents/`, { replace: true });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(handleUpdate)}>
      <div className="space-y-5 rounded-md border bg-white p-3">
        <div className="grid grid-cols-[1fr_1fr]">
          <InputLayout type="date" error={errors?.startDate?.message}>
            <label className="font-semibold" htmlFor="startDate">
              Start Date
            </label>
            <input
              className="w-24 border border-gray-200 p-1 focus:outline-none sm:w-fit sm:rounded-md"
              type="date"
              id="startDate"
              autoComplete="off"
              defaultValue={startDate}
              //   disabled={true}
              {...register('startDate', {
                required: 'This field is required',
                validate: (date) =>
                  date < getValues().endDate ||
                  'Start date must not higher than end date',
              })}
            />
          </InputLayout>
          <InputLayout
            type="date"
            datePosition="flex items-end justify-end flex-col"
            error={errors?.endDate?.message}
          >
            <label className="font-semibold" htmlFor="endDate">
              End Date
            </label>
            <input
              className="w-24 border border-gray-200 p-1 focus:outline-none sm:w-fit sm:rounded-md"
              type="date"
              id="endDate"
              autoComplete="off"
              defaultValue={endDate}
              //   disabled={true}
              {...register('endDate', {
                required: 'This field is required',
                validate: (date) =>
                  date > getValues().startDate ||
                  'Start date must not higher than end date',
              })}
            />
          </InputLayout>
        </div>

        <InputLayout>
          <label className="font-semibold" htmlFor="carID">
            Car
          </label>
          <select
            className="ray-500 rounded-sm border p-1 transition-all duration-200 focus:outline-none sm:rounded-md sm:p-2 lg:w-fit"
            id="carID"
            defaultValue={carID}
            // disabled={isLoadingCar || isLoadingCategories || isUpdatingProduct}
            {...register('carID', {
              required: 'This field is required',
            })}
          >
            {cars?.map((car) => (
              <option
                className="bg-white text-gray-700"
                value={car.id}
                key={car.id}
              >
                {car.carName.toUpperCase()}
              </option>
            ))}
          </select>
        </InputLayout>

        <InputLayout>
          <label className="font-semibold" htmlFor="status">
            Status
          </label>
          <select
            className="ray-500 rounded-sm border p-1 transition-all duration-200 focus:outline-none sm:rounded-md sm:p-2 lg:w-fit"
            id="status"
            defaultValue={status}
            // disabled={isLoadingCar || isLoadingCategories || isUpdatingProduct}
            {...register('status', {
              required: 'This field is required',
            })}
          >
            {statusOption.map((status) => (
              <option
                className="bg-white text-gray-700"
                value={status}
                key={status}
              >
                {status.toUpperCase()}
              </option>
            ))}
          </select>
        </InputLayout>
      </div>
      <Buttons position="text-end">
        <Button type="back" />
        <Button type="form">Confirm</Button>
      </Buttons>
    </form>
  );
}

export default RentForm;
