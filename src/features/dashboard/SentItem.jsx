function SentItem({ items }) {
  return (
    <li className="grid cursor-pointer grid-cols-[auto_1.5rem_1fr_1fr_1fr] content-center space-x-1 border-b p-[2px] transition-all duration-300 ease-in-out hover:bg-gray-50 md:grid-cols-[auto_2.5rem_1fr_1fr_1fr] xl:grid-cols-[auto_5rem_1fr_1fr_1fr] xl:space-x-2 2xl:p-2">
      <div className="content-center text-[4px] lg:text-[6px] xl:text-xs">
        <p className="rounded-full bg-orange-300 p-[1px] px-1 text-center font-semibold text-orange-600 lg:px-2">
          {items.status.toUpperCase()}
        </p>
      </div>
      <p className="content-center">{items.shipmentName}</p>
      <p className="content-center">{items.recipientName}</p>
      <p className="content-center">{items.productName}</p>
      <p className="content-center text-[5px] xl:text-[10px]">
        Estimated delivered on {items.transactionDate}
      </p>
    </li>
  );
}

export default SentItem;
