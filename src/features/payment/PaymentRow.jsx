import Buttons from '../../ui/Buttons.jsx';
import DeleteButton from '../../ui/DeleteButton.jsx';
import { useModalContext } from '../../ui/Modal.jsx';
import Table from '../../ui/Table.jsx';
import { useUpdatePayment } from './useUpdatePayment.js';

function PaymentRow({ payment: { id, paymentName } }) {
  const { dispatch } = useModalContext();
  const { mutate: updatePayment, isPending: isLoadingUpdatePayment } =
    useUpdatePayment();

  const handleUpdate = (e) => {
    if (e.target.value.length < 1) return;
    updatePayment({ paymentName: e.target.value, id });
  };
  return (
    <Table.Col>
      <div className="content-center">
        <input
          type="text"
          defaultValue={paymentName}
          className="focus:outline-none"
          disabled={isLoadingUpdatePayment}
          onBlur={handleUpdate}
        />
      </div>
      <Buttons>
        <DeleteButton
          onClick={() => {
            dispatch({
              type: 'admin/openModal',
              payload: {
                title: 'Delete',
                content: `Are you sure want to delete ${paymentName}?`,
                id: id,
                type: 'payment',
              },
            });
          }}
        />
      </Buttons>
    </Table.Col>
  );
}

export default PaymentRow;
