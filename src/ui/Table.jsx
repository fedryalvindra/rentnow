import { createContext, useContext } from 'react';

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="overflow-hidden rounded-xl border border-gray-300 text-[6px]">
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      style={{ gridTemplateColumns: columns }}
      className={`grid bg-gray-100 p-1 sm:text-[10px] md:p-3 md:text-xs lg:text-sm`}
    >
      {children}
    </div>
  );
}

function Body({ children }) {
  return <div className="bg-white">{children}</div>;
}

function Col({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <div
      style={{ gridTemplateColumns: columns }}
      className={`grid cursor-pointer border-b p-2 text-[6px] transition-all duration-300 ease-in-out hover:bg-gray-50 sm:text-[8px] md:text-xs lg:text-sm`}
    >
      {children}
    </div>
  );
}

function Row({ children, position = 'text-center' }) {
  return <div className={`${position} font-semibold`}>{children}</div>;
}

Table.Header = Header;
Table.Body = Body;
Table.Col = Col;
Table.Row = Row;

export default Table;
