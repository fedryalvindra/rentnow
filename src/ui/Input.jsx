import { HiOutlinePlus } from 'react-icons/hi';
import Button from './Button.jsx';

function Input({ handleSubmit, value, setValue, isLoading, placeholder }) {
  return (
    <form
      className="grid grid-cols-[1fr_auto] space-x-1"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border pl-1 text-[10px] focus:outline-none md:text-xs xl:text-sm"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={isLoading}
      />
      <Button type="add">
        <span className="flex items-center gap-1 sm:py-1">
          <span className="hidden sm:block">ADD CATEGORY</span>
          <HiOutlinePlus />
        </span>
      </Button>
    </form>
  );
}

export default Input;
