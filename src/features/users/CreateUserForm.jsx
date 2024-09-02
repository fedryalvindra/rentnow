import Button from '../../ui/Button.jsx';
import Buttons from '../../ui/Buttons.jsx';
import InputLayout from '../../ui/InputLayout.jsx';

function CreateUserForm() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="space-y-3 sm:rounded-md sm:border sm:bg-white sm:p-4 md:space-y-5 md:p-5 lg:rounded-lg lg:p-6 xl:space-y-8"
      onSubmit={onSubmit}
    >
      <div className="space-y-2 xl:space-y-5">
        <InputLayout>
          <label className="font-semibold" htmlFor="username">
            Username
          </label>
          <input
            className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
            type="text"
            id="username"
            autoComplete="off"
            placeholder="Enter username"
          />
        </InputLayout>
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
          />
        </InputLayout>
        <InputLayout>
          <label className="font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
            type="text"
            id="password"
            autoComplete="off"
            placeholder="Enter password"
          />
        </InputLayout>
        <InputLayout>
          <label className="font-semibold" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
            type="text"
            id="confirmPassword"
            autoComplete="off"
            placeholder="Re-enter password"
          />
        </InputLayout>
        <div className="text-[9px] font-semibold sm:hidden text-red-500">
          *New user will need to do verification on gmail for prevent fake user
        </div>
      </div>
      <Buttons position="text-end">
        <Button type="reset" />
        <Button type="form">Add new user</Button>
      </Buttons>
    </form>
  );
}

export default CreateUserForm;
