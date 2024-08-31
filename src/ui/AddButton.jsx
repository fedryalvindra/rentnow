import { HiOutlinePlus } from 'react-icons/hi';
import Button from './Button.jsx';

function AddButton({ button, onClick, disabled }) {
  return (
    <Button type="add" onClick={onClick} disabled={disabled}>
      <span className="flex items-center gap-1 sm:py-1">
        <span className="hidden sm:block">ADD {button.toUpperCase()}</span>
        <HiOutlinePlus />
      </span>
    </Button>
  );
}

export default AddButton;
