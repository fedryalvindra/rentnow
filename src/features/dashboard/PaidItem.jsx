function PaidItem({ items }) {
  return (
    <li className="w-full p-1 hover:bg-gray-200 2xl:p-2">
      <div className="grid grid-cols-[4rem_1fr_2.5rem] space-x-1 md:grid-cols-[3rem_1fr_4rem] xl:grid-cols-[5rem_1fr_6rem]">
        <img
          className="h-10 w-full content-center bg-white object-scale-down"
          src={items.productImageURL}
        />
        <div>
          <p className="xl:text-sm">{items.recipientName}</p>
          <p>
            {items.productName}
            {items.productQuantity > 1 && `(${items.productQuantity}x)`}
          </p>
        </div>
        <div className="content-center">
          <div className="w-full rounded-full bg-yellow-300 text-center xl:text-sm">
            {items.status.toUpperCase()}
          </div>
        </div>
      </div>
      <div className="flex justify-between text-[5px] text-white md:text-[7px] xl:text-sm">
        <p className="w-full bg-gray-500 p-1 text-center">
          created at {items.transactionDate}
        </p>
        <p className="w-full bg-sky-700 p-1 text-center">
          estimated delivered in {items.shipmentEstimatedArrived} days
        </p>
      </div>
    </li>
  );
}

export default PaidItem;
