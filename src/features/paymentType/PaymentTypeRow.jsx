import Buttons from '../../ui/Buttons.jsx';
import DeleteButton from '../../ui/DeleteButton.jsx';
import { useModalContext } from '../../ui/DeleteModal.jsx';
import Table from '../../ui/Table.jsx';
import { useUdpatePaymentType } from './useUpdatePaymentType.js';

function PaymentTypeRow({ paymentType: { id, paymentType }, totalTypes }) {
  const { dispatch } = useModalContext();
  const { mutate: updatePaymentType, isPending: isLoadingUpdatePaymentType } =
    useUdpatePaymentType();

  const handleUpdate = (e) => {
    if (e.target.value.length < 1) return;
    updatePaymentType({ id, paymentType: e.target.value });
  };
  return (
    <Table.Col>
      <div className="content-center">
        <input
          type="text"
          defaultValue={paymentType}
          className="focus:outline-none"
          disabled={isLoadingUpdatePaymentType}
          onBlur={handleUpdate}
        />
      </div>
      <div className="flex items-center gap-10">
        <div>{totalTypes < 1 ? '-' : `${totalTypes} payments`}</div>
        <Buttons>
          <DeleteButton
            onClick={() => {
              dispatch({
                type: 'admin/openModal',
                payload: {
                  title: 'Delete',
                  content: `Are you sure want to delete ${paymentType}?`,
                  id: id,
                  type: 'paymentType',
                },
              });
            }}
          />
        </Buttons>
      </div>
    </Table.Col>
  );
}

export default PaymentTypeRow;
