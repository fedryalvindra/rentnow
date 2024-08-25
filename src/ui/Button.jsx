function Button({ type, children, onClick, isFilter }) {
  let width;

  if (type === 'full') width = 'w-full';

  if (type === 'small') width = 'xl:w-36 xl:text-sm';

  if (type === 'add') width = 'md:px-3';

  if (type == 'filter')
    return (
      <button
        onClick={onClick}
        className={`p-1 ${isFilter ? 'bg-sky-500 text-white' : 'hover:bg-gray-100'}`}
      >
        {children}
      </button>
    );

  return (
    <button
      className={`bg-sky-400 text-white hover:bg-sky-500 ${width} p-1 text-[10px] md:text-xs xl:text-sm`}
    >
      {children}
    </button>
  );
}

export default Button;
