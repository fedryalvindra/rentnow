import { formattedDate } from '../../helpers/dateValidation.js';

function RentDetailReportCustomer({
  rent: {
    startDate,
    endDate,
    created_at: transactionDate,
    Customer: { fullName, email, phoneNum, address },
    Payment: { paymentName },
  },
}) {
  return (
    <div className="space-y-3 p-2 pt-3 lg:space-y-6 lg:px-5 lg:pb-5">
      <div className="grid grid-cols-[auto_auto_1fr] space-x-2 md:space-x-5">
        <div className="content-center text-[10px] font-semibold md:text-xs lg:text-[15px]">
          {fullName}
        </div>
        <div className="content-center text-[10px] font-semibold md:text-xs lg:text-[15px]">
          {email}
        </div>
        <div className="content-center text-end text-gray-400">
          Transaction date | {formattedDate(transactionDate)}
        </div>
      </div>
      <div className="grid grid-cols-[auto_1fr] space-x-2">
        <div className="content-center text-[10px] font-semibold md:text-xs lg:text-[15px]">
          {phoneNum}
        </div>
        <div className="content-center text-end text-gray-400">{address}</div>
      </div>
      <div className="flex gap-2 lg:gap-5 lg:text-sm font-semibold">
        <div className="content-center">Payment</div>
        <div className="content-center">{paymentName}</div>
      </div>
      <div className="grid grid-cols-[1fr_1fr] font-semibold">
        <div>Start Date {formattedDate(startDate)}</div>
        <div className="text-end">End Date {formattedDate(endDate)}</div>
      </div>
    </div>
  );
}

export default RentDetailReportCustomer;
