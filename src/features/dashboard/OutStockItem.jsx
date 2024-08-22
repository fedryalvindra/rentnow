import Button from '../../ui/Button.jsx';

function OutStockItem({ items }) {
  return (
    <li className="flex">
      <div className="flex w-full gap-1 xl:gap-4">
        <img
          className="w-8 xl:w-10"
          src={items.productImageURL}
          alt={items.productName}
        />
        <div className="flex w-full items-center justify-between">
          <p>{items.productName}</p>
          <Button type="small">Add product</Button>
        </div>
      </div>
    </li>
  );
}

export default OutStockItem;
