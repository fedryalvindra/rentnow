import {
  HiOutlineClipboardList,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentRemove,
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlineUsers,
} from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="border-r border-sky-100 bg-white p-1 xl:p-3">
      <nav className="flex flex-col items-center space-y-5 2xl:space-y-10">
        <img src="Logo.png" className="w-20 xl:w-36" />
        <ul className="w-full space-y-3 text-[10px] md:text-sm 2xl:text-lg">
          <li>
            <NavLink
              className="flex w-full items-center gap-1 rounded-md p-1 hover:bg-gray-200 lg:gap-2 lg:p-2 xl:py-5"
              to="/dashboard"
            >
              <HiOutlineHome size={16} />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex w-full items-center gap-1 rounded-md p-1 hover:bg-gray-200 lg:gap-2 lg:p-2 xl:py-5"
              to="/transactions"
            >
              <HiOutlineDocumentRemove size={16} />
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex w-full items-center gap-1 rounded-md p-1 hover:bg-gray-200 lg:gap-2 lg:p-2 xl:py-5"
              to="/products"
            >
              <HiOutlineShoppingBag size={16} />
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex w-full items-center gap-1 rounded-md p-1 hover:bg-gray-200 lg:gap-2 lg:p-2 xl:py-5"
              to="/shipments"
            >
              <HiOutlineClipboardList size={16} />
              Shipments
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex w-full items-center gap-1 rounded-md p-1 hover:bg-gray-200 lg:gap-2 lg:p-2 xl:py-5"
              to="/payments"
            >
              <HiOutlineCurrencyDollar size={16} />
              Payments
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex w-full items-center gap-1 rounded-md p-1 hover:bg-gray-200 lg:gap-2 lg:p-2 xl:py-5"
              to="/users"
            >
              <HiOutlineUsers size={16} />
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
