import Button from '../../ui/Button.jsx';

function OutStockItem({ items }) {
  return (
    <li className="flex cursor-pointer border-b transition-all duration-200 ease-in-out hover:bg-gray-50 xl:p-2">
      <div className="flex w-full gap-1 sm:gap-2 xl:gap-4">
        <img
          className="w-8 xl:w-10"
          src={items.productImageURL}
          alt={items.productName}
        />
        <div className="flex w-full items-center justify-between">
          <p className="font-semibold">{items.productName}</p>
          <Button type="small">ADD</Button>
        </div>
      </div>
    </li>
  );
}

export default OutStockItem;
