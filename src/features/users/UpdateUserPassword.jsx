import { useForm } from 'react-hook-form';
import InputLayout from '../../ui/InputLayout.jsx';
import Buttons from '../../ui/Buttons.jsx';
import Button from '../../ui/Button.jsx';
import { useUpdateUser } from '../authentication/useUpdateUser.js';

function UpdateUserPassword() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { mutate: updateUser, isPending } = useUpdateUser();

  const onSubmit = ({ password }) => {
    if (!password) return;
    updateUser(
      { password },
      {
        onSettled: () => reset(),
      },
    );
  };
  return (
    <form
      className="space-y-3 sm:rounded-md sm:border sm:bg-white sm:p-4 md:space-y-5 md:p-5 lg:rounded-lg lg:p-6 xl:space-y-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-2 xl:space-y-5">
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
      </div>
      <Buttons position="text-end">
        <Button type="reset" disabled={isPending} />
        <Button type="form" disabled={isPending}>
          Update Password
        </Button>
      </Buttons>
    </form>
  );
}

export default UpdateUserPassword;
