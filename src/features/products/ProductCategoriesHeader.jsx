import { HiOutlinePlus } from 'react-icons/hi';
import Button from '../../ui/Button.jsx';
import Heading from '../../ui/Heading.jsx';

function ProductCategoriesHeader() {
  return (
    <div className="flex items-center justify-between space-y-1">
      <Heading>Product Categories</Heading>
      <Button type="add">
        <span className="flex items-center gap-1">
          Add Category <HiOutlinePlus />
        </span>
      </Button>
    </div>
  );
}

export default ProductCategoriesHeader;
