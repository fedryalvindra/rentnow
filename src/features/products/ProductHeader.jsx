import { HiOutlinePlus } from 'react-icons/hi';
import Button from '../../ui/Button.jsx';
import Filter from '../../ui/Filter.jsx';
import Heading from '../../ui/Heading.jsx';
import Search from '../../ui/Search.jsx';
import Sortby from '../../ui/Sortby.jsx';
import { useNavigate } from 'react-router-dom';
import { useCategory } from '../categories/useCategory.js';

import Skeleton from 'react-loading-skeleton';

function ProductHeader() {
  const { data, isLoading } = useCategory();
  const navigate = useNavigate();

  let categories;
  categories = data?.map((category) => category?.categoryName);

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <Heading>Cars</Heading>
        <Search placeholder="Search car plate" />
      </div>
      <div className="flex justify-end gap-1">
        {isLoading ? (
          <Skeleton className="h-full w-40 p-[2px] sm:w-72 sm:p-2 xl:w-80" />
        ) : (
          <>
            <Filter>
              <Filter.Items
                items={['all', ...categories]}
                filterField="category"
              />
            </Filter>

            <Filter>
              <Filter.Items
                items={['all', 'Available', 'Rent', "Maintenance"]}
                filterField="status"
              />
            </Filter>
          </>
        )}
        <Sortby />
        <Button type="add" onClick={() => navigate('car-form')}>
          <span className="flex items-center gap-1">
            Add Car <HiOutlinePlus />
          </span>
        </Button>
      </div>
    </div>
  );
}

export default ProductHeader;
