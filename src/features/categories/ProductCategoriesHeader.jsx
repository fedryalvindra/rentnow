import { HiOutlinePlus } from 'react-icons/hi';
import Button from '../../ui/Button.jsx';
import Heading from '../../ui/Heading.jsx';
import { useState } from 'react';
import { useCreateCategory } from './useCreateCategory.js';

function ProductCategoriesHeader({ isLoadingCategories }) {
  const [categoryName, setCategoryName] = useState('');
  const { mutate: createCategory, isPending: isCreateCategory } =
    useCreateCategory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName.length < 1) return;
    createCategory(categoryName);
    setCategoryName('');
  };

  return (
    <div className="flex flex-col space-y-2">
      <Heading>Product Categories</Heading>
      <form
        className="grid grid-cols-[1fr_auto] space-x-1"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Category"
          className="w-full border pl-1 text-[10px] focus:outline-none md:text-xs xl:text-sm"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          disabled={isCreateCategory || isLoadingCategories}
        />
        <Button type="add">
          <span className="flex items-center gap-1 sm:py-1">
            <span className="hidden sm:block">ADD CATEGORY</span>
            <HiOutlinePlus />
          </span>
        </Button>
      </form>
    </div>
  );
}

export default ProductCategoriesHeader;
