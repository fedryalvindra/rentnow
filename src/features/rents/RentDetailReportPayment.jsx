function RentDetailReportPayment({
  rent: {
    Payment: { paymentName },
  },
}) {
  return (
    <div className="grid grid-cols-[1fr_1fr] p-1 md:p-2 lg:pt-5 lg:text-sm">
      <div className="content-center text-center font-semibold">Payment</div>
      <div className="content-center text-center font-semibold">
        {paymentName}
      </div>
    </div>
  );
}

export default RentDetailReportPayment;
