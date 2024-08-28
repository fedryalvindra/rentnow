import { NavLink } from 'react-router-dom';

function ProductNavBar() {
  return (
    <ul
      id="productNavigation"
      className="flex space-x-10 text-xs font-semibold lg:text-sm xl:text-base w-full"
    >
      <li>
        <NavLink
          className="text-gray-400 transition-all duration-300 ease-in-out"
          to="/products"
          end
        >
          All Products
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-gray-400 transition-all duration-300 ease-in-out"
          to="/products/categories"
        >
          Categories
        </NavLink>
      </li>
    </ul>
  );
}

export default ProductNavBar;
