import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button.jsx';
import Filter from '../../ui/Filter.jsx';
import Heading from '../../ui/Heading.jsx';
import Search from '../../ui/Search.jsx';
import Sortby from '../../ui/Sortby.jsx';
import { HiOutlinePlus } from 'react-icons/hi';

const sortItems = [
  {
    title: 'Recent first',
    value: 'date-desc',
  },
  {
    title: 'Old first',
    value: 'date-asc',
  },
  {
    title: 'Highest price',
    value: 'totalPrice-desc',
  },
  {
    title: 'Lowest price',
    value: 'totalPrice-asc',
  },
];

function RentsHeader() {
  const navigate = useNavigate();
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <Heading>Rents</Heading>
        <Search placeholder="Search reservation by plate number" />
      </div>
      <div className="flex justify-end gap-1">
        <Filter>
          <Filter.Items
            items={['all', 'unconfirmed', 'paid', 'rented', 'complete']}
            filterField="status"
          />
        </Filter>
        <Sortby sortItems={sortItems} />
        <Button type="add" onClick={() => navigate('add-rent')}>
          <span className="flex items-center gap-1">
            Add Rent <HiOutlinePlus />
          </span>
        </Button>
      </div>
    </div>
  );
}

export default RentsHeader;
