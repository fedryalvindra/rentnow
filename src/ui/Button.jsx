import { useNavigate } from 'react-router-dom';

function Button({ type, children, onClick, isFilter, disabled }) {
  const navigate = useNavigate();

  let width;

  const buttonStyles = {
    mainColor:
      'bg-indigo-500 p-1 px-2 text-xs font-semibold text-white transition-all duration-200 hover:bg-indigo-600 md:text-sm xl:text-base',
    deleteColor:
      'bg-red-500 p-1 px-2 text-xs font-semibold text-white transition-all duration-200 hover:bg-red-600 md:text-sm xl:text-base',
    secondColor:
      'border border-gray-700 p-1 px-2 text-xs font-semibold md:text-sm xl:text-base',
  };

  if (type === 'full') width = 'w-full py-2';

  if (type === 'small') width = 'xl:w-20 xl:text-xs';

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

  if (type === 'back')
    return (
      <button
        className={buttonStyles.secondColor}
        type="reset"
        onClick={() => navigate(-1)}
        disabled={disabled}
      >
        Back
      </button>
    );

  if (type === 'reset')
    return (
      <button
        className={buttonStyles.secondColor}
        type="reset"
        disabled={disabled}
      >
        Reset
      </button>
    );

  if (type === 'form')
    return (
      <button
        className={buttonStyles.mainColor}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );

  if (type === 'delete')
    return (
      <button
        className={buttonStyles.deleteColor}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );

  return (
    <button
      className={`bg-indigo-600 text-white ${width} rounded-sm p-1 text-[8px] font-semibold transition-all duration-200 hover:bg-indigo-700 sm:px-2 md:text-xs`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
