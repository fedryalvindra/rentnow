import { HiOutlinePlus } from 'react-icons/hi';
import Button from '../../ui/Button.jsx';
import Heading from '../../ui/Heading.jsx';
import SizeType from './SizeType.jsx';

function ProductCategoriesHeader() {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <Heading>Product Categories</Heading>
        <Button type="add">
          <span className="flex items-center gap-1">
            Add Category <HiOutlinePlus />
          </span>
        </Button>
      </div>
      <SizeType />
    </div>
  );
}

export default ProductCategoriesHeader;
