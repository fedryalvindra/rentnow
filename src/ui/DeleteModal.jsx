import { createContext, useContext, useReducer } from 'react';
import { useDeleteProduct } from '../features/products/useDeleteProduct.js';
import { useDeleteCategory } from '../features/categories/useDeleteCategory.js';

import { useDeletePaymentType } from '../features/paymentType/useDeletePaymentType.js';
import { useDeletePayment } from '../features/payment/useDeletePayment.js';

const ModalContext = createContext();

const inititalState = {
  isOpen: false,
  title: '',
  content: '',
  id: '',
  type: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'admin/openModal':
      return {
        ...state,
        isOpen: true,
        content: action.payload.content,
        id: action.payload.id,
        type: action.payload.type,
        title: action.payload.title,
      };
    case 'admin/closeModal':
      return { inititalState };
    default:
      throw new Error('Unknown action');
  }
}

function DeleteModal({ children }) {
  const [{ isOpen, content, id, type, title }, dispatch] = useReducer(
    reducer,
    inititalState,
  );

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch({ type: 'admin/closeModal' });
    }
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        title,
        content,
        handleOverlayClick,
        id,
        type,
        dispatch,
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
    <div className="w-80 max-w-lg rounded-lg bg-white p-6 shadow-lg transition-all duration-200 ease-out xl:w-96">
      {children}
    </div>
  );
}

function Buttons() {
  const { id, type, dispatch } = useContext(ModalContext);

  const { mutate: deleteProduct } = useDeleteProduct();
  const { mutate: deleteCategory } = useDeleteCategory();

  const { mutate: deletePaymentType } = useDeletePaymentType();
  const { mutate: deletePayment } = useDeletePayment();

  const handleDelete = () => {
    if (type === 'product') deleteProduct(id);
    if (type === 'category') deleteCategory(id);

    if (type === 'paymentType') deletePaymentType(id);
    if (type === 'payment') deletePayment(id);

    dispatch({ type: 'admin/closeModal' });
  };

  return (
    <div className="flex justify-end space-x-2">
      <button
        className="border border-gray-700 p-1 px-2 text-xs md:text-sm xl:text-base"
        onClick={() => dispatch({ type: 'admin/closeModal' })}
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
