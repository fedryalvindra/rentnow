import { useForm } from 'react-hook-form';
import Buttons from '../../ui/Buttons.jsx';
import InputLayout from '../../ui/InputLayout.jsx';
import { useCreateShipmentType } from './useCreateShipmentType.js';
import Button from '../../ui/Button.jsx';

function ShipmentTypeForm({ setIsOpenForm }) {
  const { register, formState, handleSubmit } = useForm();
  const { mutate: createShipmentType, isPending: isLoadingCreateShipmentType } =
    useCreateShipmentType();

  const { errors } = formState;
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpenForm(false);
    }
  };

  const onSubmit = (data) => {
    createShipmentType(data);
    setIsOpenForm(false);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-sm transition-all duration-200 ease-in-out"
      onClick={handleOverlayClick}
    >
      <form
        className="w-80 max-w-lg space-y-4 rounded-lg bg-white p-6 shadow-lg transition-all duration-200 ease-out md:w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-2">
          <InputLayout error={errors?.shipmentType?.message}>
            <label htmlFor="shipmentType">Shipment Type</label>
            <input
              id="shipmentType"
              className="border pl-1 focus:outline-none"
              type="text"
              autoComplete="off"
              disabled={isLoadingCreateShipmentType}
              placeholder="Shipment type"
              {...register('shipmentType', {
                required: 'This field is required',
              })}
            />
          </InputLayout>
          <InputLayout error={errors?.shipmentPrice?.message}>
            <label htmlFor="shipmentPrice">Price</label>
            <input
              id="shipmentPrice"
              className="border pl-1 focus:outline-none"
              type="number"
              autoComplete="off"
              disabled={isLoadingCreateShipmentType}
              placeholder="Input 0 for free cost"
              {...register('shipmentPrice', {
                required: 'This field is required',
                min: {
                  value: 0,
                  message: 'Input 0 to make it free shipment',
                },
              })}
            />
          </InputLayout>
          <InputLayout error={errors?.shipmentEstimatedArrived?.message}>
            <label htmlFor="shipmentEstimatedArrived">Estimated Arrived</label>
            <input
              id="shipmentEstimatedArrived"
              className="border pl-1 focus:outline-none"
              type="number"
              autoComplete="off"
              disabled={isLoadingCreateShipmentType}
              placeholder="Input 0 for same day"
              {...register('shipmentEstimatedArrived', {
                required: 'This field is required',
                min: {
                  value: 0,
                  message: 'Shipment min same day (ex, input 0)',
                },
              })}
            />
          </InputLayout>
        </div>
        <Buttons position="text-end">
          <Button type="reset" disabled={isLoadingCreateShipmentType} />
          <Button type="form" disabled={isLoadingCreateShipmentType}>
            Confirm
          </Button>
        </Buttons>
      </form>
    </div>
  );
}

export default ShipmentTypeForm;
