import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineLogout, HiOutlineMoon, HiOutlineUser } from 'react-icons/hi';

function Header({ setIsSidebar }) {
  return (
    <header className="flex w-full items-center justify-between border-b border-sky-100 bg-white p-2">
      <GiHamburgerMenu
        className="sm:hidden"
        onClick={() => setIsSidebar((sidebar) => !sidebar)}
      />
      <div className="flex w-full items-center justify-end gap-2 text-xs xl:text-xl">
        Fedry Alvindra
        <div className="flex items-center gap-1 border-l border-gray-400 px-2 xl:gap-3 xl:px-3">
          <HiOutlineUser className="md:text-md text-sm lg:text-lg xl:text-xl 2xl:text-2xl" />
          <HiOutlineMoon className="md:text-md text-sm lg:text-lg xl:text-xl 2xl:text-2xl" />
          <HiOutlineLogout className="md:text-md text-sm lg:text-lg xl:text-xl 2xl:text-2xl" />
        </div>
      </div>
    </header>
  );
}

export default Header;
