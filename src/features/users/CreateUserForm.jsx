import { useForm } from 'react-hook-form';
import Button from '../../ui/Button.jsx';
import Buttons from '../../ui/Buttons.jsx';
import InputLayout from '../../ui/InputLayout.jsx';
import { useSignup } from '../authentication/useSignup.js';

function CreateUserForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { mutate: signup, isPending } = useSignup();
  const onSubmit = ({ fullName, email, password }) => {
    signup({ fullName, email, password }, { onSettled: () => reset() });
  };

  return (
    <form
      className="space-y-3 sm:rounded-md sm:border sm:bg-white sm:p-4 md:space-y-5 md:p-5 lg:rounded-lg lg:p-6 xl:space-y-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-2 xl:space-y-5">
        <InputLayout error={errors?.fullName?.message}>
          <label className="font-semibold" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
            type="text"
            id="fullName"
            autoComplete="off"
            placeholder="Enter Full Name"
            disabled={isPending}
            {...register('fullName', { required: 'This field is required' })}
          />
        </InputLayout>
        <InputLayout error={errors?.email?.message}>
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
            type="text"
            id="email"
            autoComplete="off"
            placeholder="Enter email"
            disabled={isPending}
            {...register('email', {
              required: 'This field is required',
              validate: (value) => {
                const email = value.split('@');
                return (
                  email[1] === 'gmail.com' || 'Email must formatted @gmail.com'
                );
              },
            })}
          />
        </InputLayout>
        <InputLayout error={errors?.password?.message}>
          <label className="font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Enter password"
            disabled={isPending}
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 8,
                message: 'Password need a minimum of 8 characters',
              },
            })}
          />
        </InputLayout>
        <InputLayout error={errors?.confirmPassword?.message}>
          <label className="font-semibold" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
            type="password"
            id="confirmPassword"
            autoComplete="off"
            placeholder="Re-enter password"
            disabled={isPending}
            {...register('confirmPassword', {
              required: 'This field is required',
              validate: (value) =>
                value === getValues().password || 'Passwords need to match',
            })}
          />
        </InputLayout>
        <div className="text-[9px] font-semibold text-red-500 sm:hidden">
          *New user will need to do verification on gmail for prevent fake user
        </div>
      </div>
      <Buttons position="text-end">
        <Button type="reset" disabled={isPending}/>
        <Button type="form" disabled={isPending}>Add new user</Button>
      </Buttons>
    </form>
  );
}

export default CreateUserForm;
