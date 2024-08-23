function Button({ type, children, onClick, isFilter }) {
  let width;

  if (type === 'full') width = 'w-full';

  if (type === 'small') width = 'xl:w-36 xl:text-sm';

  if (type == 'filter')
    return (
      <button
        onClick={onClick}
        className={`p-1 ${isFilter && 'bg-sky-500 text-white'}`}
      >
        {children}
      </button>
    );

  return (
    <button className={`bg-sky-400 text-white hover:bg-sky-500 ${width} p-1`}>
      {children}
    </button>
  );
}

export default Button;
