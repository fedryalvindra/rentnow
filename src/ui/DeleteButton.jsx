import { HiOutlineTrash } from 'react-icons/hi';

function DeleteButton() {
  return (
    <button className="rounded-sm bg-red-300 p-1 transition-all duration-200 hover:bg-red-400">
      <HiOutlineTrash className="text-red-500" />
    </button>
  );
}

export default DeleteButton;
