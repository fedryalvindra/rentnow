import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../../ui/Button.jsx';
import Filter from '../../ui/Filter.jsx';
import Heading from '../../ui/Heading.jsx';
import Search from '../../ui/Search.jsx';
import Sortby from '../../ui/Sortby.jsx';
import { HiOutlinePlus } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { useRents } from './useRents.js';

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [plate, setPlate] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams((searchParams) => {
      searchParams.set('search', plate);
      return searchParams;
    });
  };

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <Heading>Rents</Heading>
        <form onSubmit={handleSearch}>
          <Search
            value={plate}
            onChange={setPlate}
            placeholder="Search rent by car plate number"
          />
        </form>
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
