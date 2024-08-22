function Button({ type, children }) {
  let width;

  if (type === 'full') width = 'w-full';
  if (type === 'small') width = 'xl:w-36 xl:text-sm';

  return (
    <button className={`bg-sky-400 text-white hover:bg-sky-500 ${width} p-1`}>
      {children}
    </button>
  );
}

export default Button;
