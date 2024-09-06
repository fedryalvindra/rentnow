import { HiOutlineSearch } from 'react-icons/hi';

function Search({ value, onChange, placeholder }) {
  return (
    <div className="flex items-center justify-between border bg-white p-1 text-[10px] transition-all duration-300 ease-in-out sm:text-xs md:text-sm 2xl:w-80">
      <input
        className="w-full focus:outline-none"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <HiOutlineSearch className='cursor-pointer' />
    </div>
  );
}

export default Search;
