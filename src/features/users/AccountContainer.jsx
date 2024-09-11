import Heading from '../../ui/Heading.jsx';
import PagesLayout from '../../ui/PagesLayout.jsx';
import UpdateUserForm from './UpdateUserForm.jsx';
import UpdateUserPassword from './UpdateUserPassword.jsx';

function AccountContainer() {
  return (
    <PagesLayout>
      <div className='space-y-5'>
        <Heading>Update Account</Heading>
        <div className="space-y-10">
          <UpdateUserForm />
          <UpdateUserPassword />
        </div>
      </div>
    </PagesLayout>
  );
}

export default AccountContainer;
