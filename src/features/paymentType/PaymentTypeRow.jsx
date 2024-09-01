import Buttons from '../../ui/Buttons.jsx';
import DeleteButton from '../../ui/DeleteButton.jsx';
import Table from '../../ui/Table.jsx';

function PaymentTypeRow({ paymentType: { id, paymentType }, totalTypes }) {
  return (
    <Table.Col>
      <div className="content-center">
        <input
          type="text"
          defaultValue={paymentType}
          className="focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-10">
        <div>{totalTypes < 1 ? '-' : `${totalTypes} types`}</div>
        <Buttons>
          <DeleteButton />
        </Buttons>
      </div>
    </Table.Col>
  );
}

export default PaymentTypeRow;
