import { useForm } from 'react-hook-form';
import InputLayout from '../../ui/InputLayout.jsx';
import Button from '../../ui/Button.jsx';
import Buttons from '../../ui/Buttons.jsx';
import { useUser } from '../authentication/useUser.js';
import { useUpdateUser } from '../authentication/useUpdateUser.js';

function UpdateUserForm() {
  const { data: user } = useUser();
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const {
    user_metadata: { fullName },
  } = user;
  const { mutate: updateUser, isPending } = useUpdateUser();

  const onSubmit = ({ fullName }) => {
    if (!fullName) return;
    updateUser({ fullName });
  };

  return (
    <form
      className="space-y-3 sm:rounded-md sm:border sm:bg-white sm:p-4 md:space-y-5 md:p-5 lg:rounded-lg lg:p-6 xl:space-y-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-2 xl:space-y-5">
        <InputLayout>
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
            type="text"
            id="email"
            autoComplete="off"
            placeholder="Enter email"
            value={user?.email}
            disabled={true}
          />
        </InputLayout>
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
            defaultValue={fullName}
            disabled={isPending}
            {...register('fullName', { required: 'This field is required' })}
          />
        </InputLayout>
      </div>
      <Buttons position="text-end">
        <Button type="reset" />
        <Button type="form">Update Full Name</Button>
      </Buttons>
    </form>
  );
}

export default UpdateUserForm;
