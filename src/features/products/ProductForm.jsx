import BackButton from '../../ui/BackButton.jsx';
import Buttons from '../../ui/Buttons.jsx';
import InputLayout from '../../ui/InputLayout.jsx';
import PageSpinner from '../../ui/PageSpinner.jsx';
import { useCategory } from './useCategory.js';

function ProductForm() {
  const { data: categories, isLoading: isLoadingCategories } = useCategory();

  if (isLoadingCategories) return <PageSpinner />;

  return (
    <section className="space-y-2 p-2 sm:space-y-6 sm:p-6 md:w-11/12 md:p-8 xl:w-10/12 xl:p-6 2xl:w-9/12">
      <BackButton />
      <form className="space-y-3 sm:rounded-lg sm:border sm:bg-white sm:p-4 lg:space-y-5 lg:rounded-xl lg:p-6 2xl:space-y-6">
        <InputLayout>
          <label htmlFor="productName">Product Name</label>
          <input
            className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
            type="text"
            id="productName"
          />
        </InputLayout>
        <InputLayout>
          <label htmlFor="category">Category</label>
          <select className="w-20 bg-gray-200 p-1" id="category">
            {categories?.map((category) => (
              <option value={category.id} key={category.id}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </InputLayout>
        <InputLayout>
          <label htmlFor="productPrice">Price</label>
          <input
            className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
            type="text"
            id="productPrice"
          />
        </InputLayout>
        <InputLayout>
          <label htmlFor="discount">Discount</label>
          <input
            className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
            type="text"
            id="discount"
          />
        </InputLayout>
        <InputLayout>
          <label htmlFor="stock">Stock</label>
          <input
            type="text"
            className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
            id="stock"
          />
        </InputLayout>
        <InputLayout>
          <label htmlFor="description">Description</label>
          <textarea
            className="h-48 w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
            id="description"
          />
        </InputLayout>
        <InputLayout>
          <label htmlFor="productImageURL">Image</label>
          <input
            type="file"
            className="text-gray sm:rounded-md-400 w-8/12 cursor-pointer bg-white file:cursor-pointer file:border-none file:bg-sky-500 file:p-1 file:px-3 file:text-white file:focus:outline-none sm:rounded-md"
            id="productImageURL"
          />
        </InputLayout>
        <Buttons position="text-end">
          <button className="border border-gray-700 p-1 px-2 text-xs md:text-sm xl:text-base">
            Back
          </button>
          <button className="bg-sky-400 p-1 px-2 text-xs text-white md:text-sm xl:text-base">
            Confirm
          </button>
        </Buttons>
      </form>
    </section>
  );
}

export default ProductForm;
