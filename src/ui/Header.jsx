import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineLogout, HiOutlineUser } from 'react-icons/hi';

function Header({ setIsSidebar }) {
  return (
    <header className="flex w-full items-center justify-between border-b border-gray-100 bg-white p-2">
      <GiHamburgerMenu
        className="sm:hidden"
        onClick={() => setIsSidebar((sidebar) => !sidebar)}
      />
      <div className="flex w-full items-center justify-end gap-2 text-xs md:gap-3 md:text-base xl:text-lg">
        Fedry Alvindra
        <div className="flex items-center gap-3 border-l border-gray-400 px-2 xl:gap-3 xl:px-3">
          <HiOutlineUser className="cursor-pointer p-[1px] text-sm text-gray-400 transition-all duration-200 hover:text-indigo-600 md:text-xl 2xl:text-2xl" />
          <HiOutlineLogout className="cursor-pointer p-[1px] text-sm text-gray-400 transition-all duration-200 hover:text-indigo-600 md:text-xl 2xl:text-2xl" />
        </div>
      </div>
    </header>
  );
}

export default Header;
