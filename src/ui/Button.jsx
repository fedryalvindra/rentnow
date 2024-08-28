function Button({ type, children, onClick, isFilter }) {
  let width;

  if (type === 'full') width = 'w-full py-2';

  if (type === 'small') width = 'xl:w-36 xl:text-sm';

  if (type === 'add') width = 'md:px-3';

  if (type === 'filter')
    return (
      <button
        onClick={onClick}
        className={`p-1 ${isFilter ? 'bg-indigo-600 text-white' : 'transition-all duration-200 ease-out hover:bg-gray-100'}`}
      >
        {children}
      </button>
    );

  return (
    <button
      className={`bg-indigo-600 text-white ${width} rounded-sm p-1 text-[8px] font-semibold transition-all duration-200 hover:bg-indigo-700 sm:px-2 md:text-xs xl:text-sm`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
