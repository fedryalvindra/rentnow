import { createContext, useContext, useEffect, useState } from 'react';
import Button from './Button.jsx';
import { useSearchParams } from 'react-router-dom';

const FilterContext = createContext();

function Filter({ children }) {
  const [filter, setFilter] = useState('all');

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

function Items({ items, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { filter, setFilter } = useContext(FilterContext);

  useEffect(() => {
    if (filter !== searchParams.get(filterField)) {
      searchParams.set(filterField, filter);
      setSearchParams(searchParams);
    }
  }, [filter, filterField, searchParams, setSearchParams]);

  const handleFilter = (item) => {
    setSearchParams((searchParams) => {
      searchParams.set(filterField, item);
      return searchParams;
    });
    setFilter(item);
  };

  return (
    <div className="content-center space-x-1 bg-white text-[6px] md:text-[10px] xl:p-1">
      {items.map((item) => (
        <Button
          isFilter={filter === item}
          type="filter"
          key={item}
          onClick={() => handleFilter(item)}
        >
          {item.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}

Filter.Items = Items;

export default Filter;
