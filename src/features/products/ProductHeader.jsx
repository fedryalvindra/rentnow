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
        <Heading>Products</Heading>
        <Search placeholder="Search product name" />
      </div>
      <div className="flex justify-end gap-2">
        {isLoading ? (
          <Skeleton className="p-[2px] sm:p-2 h-full w-40 sm:w-72 xl:w-80" />
        ) : (
          <Filter>
            <Filter.Items
              items={['all', ...categories, 'no-stock']}
              filterField="category"
            />
          </Filter>
        )}
        <Sortby />
        <Button type="add" onClick={() => navigate('product-form')}>
          <span className="flex items-center gap-1">
            Add Product <HiOutlinePlus />
          </span>
        </Button>
      </div>
    </div>
  );
}

export default ProductHeader;
