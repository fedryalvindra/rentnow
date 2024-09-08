import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button.jsx';

function RentedItem({ items }) {
  const navigate = useNavigate();

  return (
    <li
      className="grid cursor-pointer grid-cols-[auto_1fr_auto_auto] content-center space-x-1 border-b p-[2px] transition-all duration-300 ease-in-out hover:bg-gray-50 md:grid-cols-[auto_1fr_auto_auto] xl:grid-cols-[auto_1fr_auto_auto] xl:space-x-2 2xl:p-2"
    >
      <div className="content-center text-[4px] lg:text-[6px] xl:text-xs">
        <p className="rounded-full bg-orange-300 p-[1px] px-1 text-center font-semibold text-orange-600 lg:px-2">
          {items.status.toUpperCase()}
        </p>
      </div>
      <p className="content-center pl-2">{items.Customer.fullName}</p>
      <p className="content-center pr-3 text-end">{items.numDays} Days</p>
      <div className="content-center">
        <Button onClick={() => navigate(`/rents/${items.id}`)}>CHECK</Button>
      </div>
    </li>
  );
}

export default RentedItem;
