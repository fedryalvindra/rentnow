import { createContext, useContext } from 'react';

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="text-[10px]">{children}</div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      className={`grid grid-cols-[${columns}] bg-gray-200 p-1 sm:text-[10px] md:p-3 md:text-xs lg:text-sm`}
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
      className={`grid grid-cols-[${columns}] p-2 text-[8px] sm:text-[10px] md:text-xs lg:text-sm`}
    >
      {children}
    </div>
  );
}

function Row({ children }) {
  return <div className="text-center">{children}</div>;
}

Table.Header = Header;
Table.Body = Body;
Table.Col = Col;
Table.Row = Row;

export default Table;
