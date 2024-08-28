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
        <img src="/public/Logo.png" className="w-20 xl:w-36" />
        <ul className="w-full space-y-3 text-[10px] sm:space-y-2 md:text-sm 2xl:text-base">
          <li>
            <NavLink
              className="flex w-full items-center gap-1 rounded-md p-1 transition-all duration-300 ease-in-out hover:bg-gray-100 md:p-2 lg:gap-2 xl:py-3"
              to="/dashboard"
            >
              <HiOutlineHome className="md:text-md text-sm lg:text-lg xl:text-xl 2xl:text-2xl" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex w-full items-center gap-1 rounded-md p-1 transition-all duration-300 ease-in-out hover:bg-gray-100 md:p-2 lg:gap-2 xl:py-3"
              to="/transactions"
            >
              <HiOutlineDocumentRemove className="md:text-md text-sm lg:text-lg xl:text-xl 2xl:text-2xl" />
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex w-full items-center gap-1 rounded-md p-1 transition-all duration-300 ease-in-out hover:bg-gray-100 md:p-2 lg:gap-2 xl:py-3"
              to="/products"
            >
              <HiOutlineShoppingBag className="md:text-md text-sm lg:text-lg xl:text-xl 2xl:text-2xl" />
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex w-full items-center gap-1 rounded-md p-1 transition-all duration-300 ease-in-out hover:bg-gray-100 md:p-2 lg:gap-2 xl:py-3"
              to="/shipments"
            >
              <HiOutlineClipboardList className="md:text-md text-sm lg:text-lg xl:text-xl 2xl:text-2xl" />
              Shipments
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex w-full items-center gap-1 rounded-md p-1 transition-all duration-300 ease-in-out hover:bg-gray-100 md:p-2 lg:gap-2 xl:py-3"
              to="/payments"
            >
              <HiOutlineCurrencyDollar className="md:text-md text-sm lg:text-lg xl:text-xl 2xl:text-2xl" />
              Payments
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex w-full items-center gap-1 rounded-md p-1 transition-all duration-300 ease-in-out hover:bg-gray-100 md:p-2 lg:gap-2 xl:py-3"
              to="/users"
            >
              <HiOutlineUsers className="md:text-md text-sm lg:text-lg xl:text-xl 2xl:text-2xl" />
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
