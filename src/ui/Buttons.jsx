function Buttons({ children, position = 'text-center' }) {
  return (
    <div
      className={`content-center space-x-1 ${position} sm:text-sm md:space-x-2 md:text-base lg:text-xl`}
    >
      {children}
    </div>
  );
}

export default Buttons;
