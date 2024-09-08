import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button.jsx';

function PaidItem({ items }) {
  const navigate = useNavigate();
  return (
    <li className="w-full cursor-pointer space-y-2 border-b p-1 transition-all duration-300 ease-in-out hover:bg-gray-50 2xl:p-2">
      <div className="grid grid-cols-[auto_1fr_1fr_auto] space-x-1 md:grid-cols-[auto_1fr_1fr_auto] xl:grid-cols-[auto_1fr_1fr_auto]">
        <div className="content-center">
          <div className="w-full rounded-full bg-yellow-300 px-2 text-center font-semibold text-yellow-600 sm:px-4 xl:text-sm">
            {items?.status?.toUpperCase()}
          </div>
        </div>
        <div className="content-center sm:pl-2">
          <p className="font-semibold xl:text-xs">
            {items?.Customer?.fullName}
          </p>
        </div>
        <div className="content-center">
          <p className="xl:text-xs">{items?.Car?.carName}</p>
        </div>
        <div className="content-center">
          <Button onClick={() => navigate(`/rents/${items.id}`)}>CHECK</Button>
        </div>
      </div>
    </li>
  );
}

export default PaidItem;
