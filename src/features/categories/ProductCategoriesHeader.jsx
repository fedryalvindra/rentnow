import Heading from '../../ui/Heading.jsx';
import { useState } from 'react';
import { useCreateCategory } from './useCreateCategory.js';
import Input from '../../ui/Input.jsx';

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
      <Input
        handleSubmit={handleSubmit}
        value={categoryName}
        setValue={setCategoryName}
        isLoading={isCreateCategory || isLoadingCategories}
        placeholder="Category name"
        button="Category"
      />
    </div>
  );
}

export default ProductCategoriesHeader;
