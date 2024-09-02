import { NavLink } from 'react-router-dom';

function ProductNavBar() {
  return (
    <ul
      id="productNavigation"
      className="flex w-full space-x-10 text-xs font-semibold lg:text-sm xl:text-base"
    >
      <li>
        <NavLink className="pb-[2px] text-gray-400" to="/cars" end>
          All Cars
        </NavLink>
      </li>
      <li>
        <NavLink className="pb-[2px] text-gray-400" to="/cars/categories">
          Categories
        </NavLink>
      </li>
    </ul>
  );
}

export default ProductNavBar;
