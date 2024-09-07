import { BiGroup } from 'react-icons/bi';
import {
  HiOutlineCurrencyDollar,
  HiOutlineDocumentRemove,
  HiOutlineHome,
  HiOutlineUsers,
} from 'react-icons/hi';
import { IoCarOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="border-r border-slate-100 bg-white p-1 xl:p-3">
      <nav className="flex flex-col items-center space-y-5 2xl:space-y-10">
        <img src="/public/Logo.png" className="w-20 xl:w-36" />
        <ul
          id="sidebar"
          className="w-full space-y-3 text-[10px] font-semibold sm:space-y-2 md:text-sm xl:text-[15px]"
        >
          <li>
            <NavLink
              className="flex w-full items-center gap-1 rounded-md p-1 text-gray-400 transition-all duration-300 ease-in-out hover:bg-gray-50 md:p-2 lg:gap-2 xl:py-5"
              to="/dashboard"
            >
              <HiOutlineHome className="md:text-m text-sm text-gray-400 lg:text-lg xl:text-xl" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex w-full items-center gap-1 rounded-md p-1 text-gray-400 transition-all duration-300 ease-in-out hover:bg-gray-50 md:p-2 lg:gap-2 xl:py-5"
              to="/rents"
            >
              <HiOutlineDocumentRemove className="md:text-m text-sm text-gray-400 lg:text-lg xl:text-xl" />
              Rents
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex w-full items-center gap-1 rounded-md p-1 text-gray-400 transition-all duration-300 ease-in-out hover:bg-gray-50 md:p-2 lg:gap-2 xl:py-5"
              to="/cars"
            >
              <IoCarOutline className="md:text-m text-sm text-gray-400 lg:text-lg xl:text-xl" />
              Cars
            </NavLink>
          </li>

          <li>
            <NavLink
              className="flex w-full items-center gap-1 rounded-md p-1 text-gray-400 transition-all duration-300 ease-in-out hover:bg-gray-50 md:p-2 lg:gap-2 xl:py-5"
              to="/payments"
            >
              <HiOutlineCurrencyDollar className="md:text-m text-sm text-gray-400 lg:text-lg xl:text-xl" />
              Payments
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex w-full items-center gap-1 rounded-md p-1 text-gray-400 transition-all duration-300 ease-in-out hover:bg-gray-50 md:p-2 lg:gap-2 xl:py-5"
              to="/customers"
            >
              <BiGroup className="md:text-m text-sm text-gray-400 lg:text-lg xl:text-xl" />
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex w-full items-center gap-1 rounded-md p-1 text-gray-400 transition-all duration-300 ease-in-out hover:bg-gray-50 md:p-2 lg:gap-2 xl:py-5"
              to="/users"
            >
              <HiOutlineUsers className="md:text-m text-sm text-gray-400 lg:text-lg xl:text-xl" />
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
