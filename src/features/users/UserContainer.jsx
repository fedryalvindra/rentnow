import Heading from '../../ui/Heading.jsx';
import PagesLayout from '../../ui/PagesLayout.jsx';
import CreateUserForm from './CreateUserForm.jsx';

function UserContainer() {
  return (
    <PagesLayout>
      <div className="space-y-3 xl:space-y-4">
        <div className="space-y-4">
          <Heading>Create a new user</Heading>
          <CreateUserForm />
        </div>
        <div className="hidden sm:block sm:text-xs sm:font-semibold sm:text-red-500 md:text-sm xl:text-base">
          *New user will need to do verification on gmail for prevent fake user
        </div>
      </div>
    </PagesLayout>
  );
}

export default UserContainer;
