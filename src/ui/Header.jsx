import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineLogout, HiOutlineUser } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import { useLogout } from '../features/authentication/useLogout.js';
import { useUser } from '../features/authentication/useUser.js';

function Header({ setIsSidebar }) {
  const { data: user } = useUser();
  const {
    user_metadata: { fullName },
  } = user;
  const { mutate: logout, isPending } = useLogout();
  return (
    <header className="flex w-full items-center justify-between border-b border-gray-100 bg-white p-2">
      <GiHamburgerMenu
        className="sm:hidden"
        onClick={() => setIsSidebar((sidebar) => !sidebar)}
      />
      <div className="flex w-full items-center justify-end gap-2 text-xs md:gap-3 md:text-base xl:text-lg">
        {fullName}
        <div className="flex items-center gap-3 border-l border-gray-400 px-2 xl:gap-3 xl:px-3">
          <NavLink to="/account">
            <HiOutlineUser className="account cursor-pointer p-[1px] text-sm text-gray-400 transition-all duration-200 hover:text-indigo-600 md:text-xl 2xl:text-2xl" />
          </NavLink>
          <button disabled={isPending} onClick={logout}>
            <HiOutlineLogout className="cursor-pointer p-[1px] text-sm text-gray-400 transition-all duration-200 hover:text-indigo-600 md:text-xl 2xl:text-2xl" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
