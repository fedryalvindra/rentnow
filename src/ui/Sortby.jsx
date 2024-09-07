import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Sortby({ sortItems }) {
  const [sortBy, setSortBy] = useState('date-desc');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (sortBy !== searchParams.get('sortBy')) {
      searchParams.set('sortBy', sortBy);
      setSearchParams(searchParams);
    }
  }, [sortBy, searchParams, setSearchParams]);

  const handleSort = (sort) => {
    setSearchParams((searchParams) => {
      searchParams.set('sortBy', sort);
      return searchParams;
    });
    setSortBy(sort);
  };
  return (
    <select
      value={sortBy}
      className="w-20 border text-[10px] hover:bg-gray-100 focus:outline-none sm:text-xs md:w-40"
      onChange={(e) => handleSort(e.target.value)}
    >
      {sortItems?.map((sort) => (
        <option key={sort.value} value={sort.value}>
          {sort.title.toUpperCase()}
        </option>
      ))}
    </select>
  );
}

export default Sortby;
