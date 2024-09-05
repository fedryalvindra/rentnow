function RentDetailReportPayment({
  rent: {
    Payment: { paymentName },
  },
}) {
  return (
    <div className="flex gap-2 p-1 md:p-2 lg:pl-5 lg:text-sm">
      <div className="content-center text-center">Payment</div>
      <div className="content-center text-center">{paymentName}</div>
    </div>
  );
}

export default RentDetailReportPayment;
