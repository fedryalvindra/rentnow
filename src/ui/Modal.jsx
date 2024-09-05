import { createContext, useContext, useReducer } from 'react';
import { useDeleteProduct } from '../features/products/useDeleteProduct.js';
import { useDeleteCategory } from '../features/categories/useDeleteCategory.js';

import { useDeletePaymentType } from '../features/paymentType/useDeletePaymentType.js';
import { useDeletePayment } from '../features/payment/useDeletePayment.js';
import { useUpdateRent } from '../features/rents/useUpdateRent.js';
import { useNavigate } from 'react-router-dom';

const ModalContext = createContext();

const inititalState = {
  isOpen: false,
  title: '',
  content: '',
  id: '',
  type: '',
  data: {},
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
        data: action.payload.data,
      };
    case 'admin/closeModal':
      return { inititalState };
    default:
      throw new Error('Unknown action');
  }
}

function Modal({ children }) {
  const [{ isOpen, content, id, type, title, data }, dispatch] = useReducer(
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
        data,
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
  const { id, type, dispatch, title, data } = useContext(ModalContext);

  const { mutate: deleteProduct } = useDeleteProduct();
  const { mutate: deleteCategory } = useDeleteCategory();

  const { mutate: deletePaymentType } = useDeletePaymentType();
  const { mutate: deletePayment } = useDeletePayment();
  const { mutate: updateRent } = useUpdateRent();

  const handleDelete = () => {
    if (type === 'product') deleteProduct(id);
    if (type === 'category') deleteCategory(id);

    if (type === 'paymentType') deletePaymentType(id);
    if (type === 'payment') deletePayment(id);

    dispatch({ type: 'admin/closeModal' });
  };

  const handleUpdate = () => {
    if (type === 'rent') updateRent({ updateData: { ...data }, id });
    dispatch({ type: 'admin/closeModal' });
  };

  if (title.toLowerCase().includes('delete'))
    return (
      <div className="flex justify-end space-x-2">
        <button
          className="border border-gray-700 p-1 px-2 text-xs md:text-sm xl:text-base"
          onClick={() => dispatch({ type: 'admin/closeModal' })}
        >
          Back
        </button>
        <button
          className="bg-red-500 p-1 px-2 text-xs text-white transition-all duration-200 hover:bg-red-600 md:text-sm xl:text-base"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    );

  if (title.toLowerCase().includes('edit'))
    return (
      <div className="flex justify-end space-x-2">
        <button
          className="border border-gray-700 p-1 px-2 text-xs md:text-sm xl:text-base"
          onClick={() => dispatch({ type: 'admin/closeModal' })}
        >
          Back
        </button>
        <button
          className="bg-green-500 p-1 px-2 text-xs text-white transition-all duration-200 hover:bg-green-600 md:text-sm xl:text-base"
          onClick={handleUpdate}
        >
          Edit
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

Modal.Title = Title;
Modal.Content = Content;
Modal.Body = Body;
Modal.Buttons = Buttons;
Modal.Window = Window;

export default Modal;
