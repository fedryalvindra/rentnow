import { formattedCurrency } from '../../helpers/currencyValidation.js';

function RentDetailReportTotalPrice({ rent: { totalPrice } }) {
  return (
    <div className="grid grid-cols-[1fr_1fr] p-2 text-[10px] font-semibold md:text-xs lg:p-5 lg:text-sm bg-gray-50">
      <div className="content-center">Total Price</div>
      <div className="content-center text-end">
        Rp. {formattedCurrency(totalPrice)}
      </div>
    </div>
  );
}

export default RentDetailReportTotalPrice;
