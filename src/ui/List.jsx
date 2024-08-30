import { createContext, useContext } from 'react';
import PaidItem from '../features/dashboard/PaidItem.jsx';
import SentItem from '../features/dashboard/SentItem.jsx';
import OutStockItem from '../features/dashboard/OutStockItem.jsx';

const ListContext = createContext();

function List({ listData, children }) {
  return (
    <ListContext.Provider value={{ listData }}>
      <section className="h-full space-y-2 overflow-hidden rounded-sm border border-slate-100 bg-white p-2 shadow-sm 2xl:space-y-3 2xl:p-4 md:rounded-md">
        {children}
      </section>
    </ListContext.Provider>
  );
}

function Title({ children }) {
  const { listData } = useContext(ListContext);
  const total = listData.length;

  return (
    <div className="flex items-center justify-between text-xs font-semibold xl:text-base">
      <h2>{children}</h2>
      <p>Total {total}</p>
    </div>
  );
}

function Items({ listType }) {
  const { listData } = useContext(ListContext);

  if (listType === 'paid')
    return (
      <ul className="h-[14rem] overflow-scroll border-t border-gray-200 text-[7px] no-scrollbar md:text-xs xl:h-[16rem] xl:text-sm">
        {listData.map((items) => (
          <PaidItem key={items.id} items={items} />
        ))}
      </ul>
    );

  if (listType === 'sent')
    return (
      <ul className="h-[5.5rem] space-y-2 overflow-scroll border-t border-gray-200 text-[6px] no-scrollbar md:h-[6rem] md:text-[8px] xl:text-xs 2xl:h-[7rem]">
        {listData.map((items) => (
          <SentItem key={items.id} items={items} />
        ))}
      </ul>
    );

  if (listType === 'outstock')
    return (
      <ul className="h-[5rem] space-y-1 overflow-scroll border-t border-gray-200 text-[6px] no-scrollbar md:h-[6rem] md:text-xs xl:h-32 2xl:h-[6rem]">
        {listData.map((items) => (
          <OutStockItem key={items.id} items={items} />
        ))}
      </ul>
    );
}

List.Title = Title;
List.Items = Items;

export default List;
