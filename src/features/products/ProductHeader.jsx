import { HiOutlinePlus } from 'react-icons/hi';
import Button from '../../ui/Button.jsx';
import Filter from '../../ui/Filter.jsx';
import Heading from '../../ui/Heading.jsx';
import Search from '../../ui/Search.jsx';
import Sortby from '../../ui/Sortby.jsx';
import { useNavigate } from 'react-router-dom';

function ProductHeader() {
  const navigate = useNavigate()

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <Heading>Products</Heading>
        <Search placeholder="Search product name" />
      </div>
      <div className="flex justify-end gap-2">
        <Filter>
          <Filter.Items
            items={['all', 'jacket', 'shirt', 'shoes', 'no-stock']}
            filterField="category"
          />
        </Filter>
        <Sortby />
        <Button type="add" onClick={() => navigate("product-form")}>
          <span className="flex items-center gap-1">
            Add Product <HiOutlinePlus />
          </span>
        </Button>
      </div>
    </div>
  );
}

export default ProductHeader;
