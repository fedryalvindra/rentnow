import { createContext, useContext, useState } from 'react';
import { useDeleteProduct } from '../features/products/useDeleteProduct.js';
import PageSpinner from './PageSpinner.jsx';

const ModalContext = createContext();

function DeleteModal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [id, setId] = useState('');
  const [type, setType] = useState('');

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        title,
        setTitle,
        setContent,
        content,
        handleOverlayClick,
        id,
        setId,
        type,
        setType,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Title() {
  const { title } = useContext(ModalContext);

  return <h2 className="mb-4 text-2xl font-semibold">{title}</h2>;
}

function Content() {
  const { content } = useContext(ModalContext);
  return <p className="mb-6">{content}</p>;
}

function Body({ children }) {
  return (
    <div className="w-80 max-w-lg rounded-lg bg-white p-6 shadow-lg">
      {children}
    </div>
  );
}

function Buttons() {
  const { setIsOpen, id, type, setTitle, setContent, setId, setType } =
    useContext(ModalContext);

  const { mutate: deleteProduct } = useDeleteProduct();

  const handleDelete = () => {
    if (type === 'product') deleteProduct(id);
    setIsOpen(false);
    setTitle('');
    setContent('');
    setId('');
    setType('');
  };

  return (
    <div className="flex justify-end space-x-2">
      <button
        className="border border-gray-700 p-1 px-2 text-xs md:text-sm xl:text-base"
        onClick={() => setIsOpen(false)}
      >
        Back
      </button>
      <button
        className="bg-red-500 p-1 px-2 text-xs text-white md:text-sm xl:text-base"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}

function Window({ children }) {
  const { isOpen, handleOverlayClick } = useContext(ModalContext);

  if (isOpen)
    return (
      <div
        className="fixed inset-0 flex items-center justify-center backdrop-blur-sm transition-all duration-200 ease-in-out"
        onClick={handleOverlayClick}
      >
        {children}
      </div>
    );
}

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === undefined)
    throw new Error('Modal Context is used outside the Context');
  return context;
};

DeleteModal.Title = Title;
DeleteModal.Content = Content;
DeleteModal.Body = Body;
DeleteModal.Buttons = Buttons;
DeleteModal.Window = Window;

export default DeleteModal;
