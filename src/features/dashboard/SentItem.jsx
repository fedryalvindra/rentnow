function SentItem({ items }) {
  return (
    <li className="grid cursor-pointer grid-cols-[1.1rem_1.5rem_1fr_1fr_1fr] content-center space-x-1 p-[2px] transition-all duration-300 ease-in-out hover:bg-gray-100 md:grid-cols-[2rem_2.5rem_1fr_1fr_1fr] xl:grid-cols-[4rem_5rem_1fr_1fr_1fr] xl:space-x-2 2xl:p-2">
      <div className="content-center text-[4px] lg:text-[6px] xl:text-xs">
        <p className="rounded-full bg-orange-300 text-center">
          {items.status.toUpperCase()}
        </p>
      </div>
      <p className="content-center">{items.shipmentName}</p>
      <p className="content-center">{items.recipientName}</p>
      <p className="content-center">
        {items.productName}
        {items.productQuantity > 1 && `(${items.productQuantity}x)`}
      </p>
      <p className="text-[5px] xl:text-xs content-center">
        Estimated delivered on {items.transactionDate}
      </p>
    </li>
  );
}

export default SentItem;
