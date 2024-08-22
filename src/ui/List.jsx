import { createContext, useContext } from 'react';
import PaidItem from '../features/dashboard/PaidItem.jsx';
import SentItem from '../features/dashboard/SentItem.jsx';
import OutStockItem from '../features/dashboard/OutStockItem.jsx';

const ListContext = createContext();

function List({ listData, children }) {
  return (
    <ListContext.Provider value={{ listData }}>
      <div className="h-full space-y-2 bg-white p-2 2xl:p-4 2xl:space-y-3">{children}</div>
    </ListContext.Provider>
  );
}

function Title({ children }) {
  const { listData } = useContext(ListContext);
  const total = listData.length;

  return (
    <div className="flex items-center justify-between text-xs xl:text-xl">
      <h2>{children}</h2>
      <p>Total {total}</p>
    </div>
  );
}

function Items({ listType }) {
  const { listData } = useContext(ListContext);

  if (listType === 'paid')
    return (
      <ul className="h-[14rem] overflow-scroll text-[7px] md:text-xs xl:h-[22rem] xl:text-sm 2xl:text-lg">
        {listData.map((items) => (
          <PaidItem key={items.id} items={items} />
        ))}
      </ul>
    );

  if (listType === 'sent')
    return (
      <ul className="h-[5.5rem] space-y-2 overflow-scroll text-[6px] md:h-[6rem] md:text-[8px] xl:h-[8rem] xl:text-sm 2xl:h-[9rem]">
        {listData.map((items) => (
          <SentItem key={items.id} items={items} />
        ))}
      </ul>
    );

  if (listType === 'outstock')
    return (
      <ul className="h-[5rem] space-y-1 overflow-scroll text-[6px] md:h-[6rem] md:text-xs xl:h-32 xl:text-lg 2xl:h-[9rem]">
        {listData.map((items) => (
          <OutStockItem key={items.id} items={items} />
        ))}
      </ul>
    );
}

List.Title = Title;
List.Items = Items;

export default List;
