import { HiOutlineSearch } from 'react-icons/hi';

function Search({ placeholder }) {
  return (
    <div className="flex items-center justify-between bg-white p-1 text-[10px] transition-all duration-300 ease-in-out sm:text-xs md:text-sm 2xl:w-80">
      <input className="w-full focus:outline-none" placeholder={placeholder} />
      <HiOutlineSearch />
    </div>
  );
}

export default Search;
