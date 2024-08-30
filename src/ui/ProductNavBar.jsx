import { NavLink } from 'react-router-dom';

function ProductNavBar() {
  return (
    <ul
      id="productNavigation"
      className="flex w-full space-x-10 text-xs font-semibold lg:text-sm xl:text-base"
    >
      <li>
        <NavLink className="pb-[2px] text-gray-400" to="/products" end>
          All Products
        </NavLink>
      </li>
      <li>
        <NavLink className="pb-[2px] text-gray-400" to="/products/categories">
          Categories
        </NavLink>
      </li>
    </ul>
  );
}

export default ProductNavBar;
