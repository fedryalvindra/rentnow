import { HiOutlinePencilAlt } from 'react-icons/hi';

function EditButton({ onClick }) {
  return (
    <button
      className="rounded-sm bg-green-300 p-1 transition-all duration-200 hover:bg-green-400"
      onClick={onClick}
    >
      <HiOutlinePencilAlt className="text-green-500" />
    </button>
  );
}

export default EditButton;
