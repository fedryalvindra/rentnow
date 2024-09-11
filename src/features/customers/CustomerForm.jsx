import { useForm } from 'react-hook-form';
import InputLayout from '../../ui/InputLayout.jsx';
import Buttons from '../../ui/Buttons.jsx';
import Button from '../../ui/Button.jsx';
import { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { useCreateCustomer } from './useCreateCustomer.js';

function CustomerForm() {
  const [isHide, setIsHide] = useState(true);
  const [isHide2, setIsHide2] = useState(true);
  const { mutate: createCustomer, isPending: isLoadingCreateCustomer } =
    useCreateCustomer();
  const { register, handleSubmit, getValues, formState, reset } = useForm();
  const { errors } = formState;

  const passwordType = isHide ? 'password' : 'text';
  const passwordType2 = isHide2 ? 'password' : 'text';

  const onSubmit = (data) => {
    delete data.repeatPassword;
    createCustomer(data);
    reset();
    setIsHide(false);
    setIsHide2(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <div className="space-y-3 rounded-md border bg-white p-3 md:space-y-6 md:p-5">
        <InputLayout error={errors?.fullName?.message}>
          <label className="font-semibold" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
            type="text"
            id="fullName"
            autoComplete="off"
            placeholder="Full Name"
            disabled={isLoadingCreateCustomer}
            {...register('fullName', {
              required: 'This field is required',
              minLength: {
                value: 5,
                message: 'Minimal characters 5',
              },
            })}
          />
        </InputLayout>

        <InputLayout error={errors?.phoneNum?.message}>
          <label className="font-semibold" htmlFor="phoneNum">
            Phone Number
          </label>
          <input
            className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
            type="text"
            id="phoneNum"
            autoComplete="off"
            placeholder="Phone Number"
            disabled={isLoadingCreateCustomer}
            {...register('phoneNum', {
              required: 'This field is required',
              validate: (phoneLength) =>
                phoneLength.length === 12 ||
                'Phone length must be 12 characters',
            })}
          />
        </InputLayout>

        <InputLayout error={errors?.birthday?.message}>
          <label className="font-semibold" htmlFor="birthday">
            Birthday
          </label>
          <input
            className="w-fit border border-gray-200 p-1 focus:outline-none sm:rounded-md"
            type="date"
            id="birthday"
            autoComplete="off"
            disabled={isLoadingCreateCustomer}
            {...register('birthday', {
              required: 'This field is required',
            })}
          />
        </InputLayout>

        <InputLayout error={errors?.address?.message}>
          <label className="font-semibold" htmlFor="address">
            Address
          </label>
          <textarea
            className="h-48 w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
            id="address"
            autoComplete="off"
            placeholder="Address"
            disabled={isLoadingCreateCustomer}
            {...register('address', {
              required: 'This field is required',
            })}
          />
        </InputLayout>
      </div>

      <div className="space-y-3">
        <div className="space-y-3 rounded-md border bg-white p-3 md:space-y-6 md:p-5">
          <InputLayout error={errors?.email?.message}>
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
              type="text"
              id="email"
              autoComplete="off"
              placeholder="Email"
              disabled={isLoadingCreateCustomer}
              {...register('email', {
                required: 'This field is required',
                validate: (value) => {
                  const email = value.split('@');
                  return (
                    email[1] === 'gmail.com' ||
                    'Email must formatted @gmail.com'
                  );
                },
              })}
            />
          </InputLayout>
          <InputLayout error={errors?.password?.message}>
            <label className="font-semibold" htmlFor="password">
              Password
            </label>
            <div className="flex w-8/12 items-center justify-between border border-gray-200 pr-3 sm:rounded-md">
              <input
                className="w-full p-1 focus:outline-none sm:rounded-md"
                type={passwordType}
                id="password"
                autoComplete="off"
                placeholder="Password"
                disabled={isLoadingCreateCustomer}
                {...register('password', {
                  required: 'This field is required',
                  minLength: {
                    value: 5,
                    message: 'Password minimal 5 characters',
                  },
                })}
              />
              {isHide ? (
                <HiOutlineEyeOff
                  className="cursor-pointer"
                  onClick={() => setIsHide(false)}
                />
              ) : (
                <HiOutlineEye
                  className="cursor-pointer"
                  onClick={() => setIsHide(true)}
                />
              )}
            </div>
          </InputLayout>
          <InputLayout error={errors?.repeatPassword?.message}>
            <label className="font-semibold" htmlFor="repeatPassword">
              Repeat Password
            </label>
            <div className="flex w-8/12 items-center justify-between border border-gray-200 pr-3 sm:rounded-md">
              <input
                className="w-full p-1 focus:outline-none sm:rounded-md"
                type={passwordType2}
                id="repeatPassword"
                autoComplete="off"
                placeholder="Repeat Password"
                disabled={isLoadingCreateCustomer}
                {...register('repeatPassword', {
                  required: 'This field is required',
                  minLength: {
                    value: 5,
                    message: 'Password minimal 5 characters',
                  },
                  validate: (repeatPassword) =>
                    repeatPassword === getValues().password ||
                    'Different password',
                })}
              />
              {isHide2 ? (
                <HiOutlineEyeOff
                  className="cursor-pointer"
                  onClick={() => setIsHide2(false)}
                />
              ) : (
                <HiOutlineEye
                  className="cursor-pointer"
                  onClick={() => setIsHide2(true)}
                />
              )}
            </div>
          </InputLayout>
        </div>
        <Buttons position="text-end">
          <Button disabled={isLoadingCreateCustomer} type="reset" />
          <Button disabled={isLoadingCreateCustomer} type="form">
            CONFIRM
          </Button>
        </Buttons>
      </div>
    </form>
  );
}

export default CustomerForm;
