import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { useSearchParams } from 'react-router-dom';

export const PAGE_SIZE = 10;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    setSearchParams((searchParams) => {
      searchParams.set('page', next);
      return searchParams;
    });
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    setSearchParams((searchParams) => {
      searchParams.set('page', prev);
      return searchParams;
    });
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-5 xl:pt-4">
      <div onClick={prevPage} disabled={currentPage == 1}>
        <HiOutlineChevronLeft className="cursor-pointer rounded-sm bg-indigo-600 text-sm text-white transition-all duration-200 hover:bg-indigo-700 sm:text-base md:p-1 md:text-xl xl:rounded-md xl:text-2xl" />
      </div>
      <p className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm">
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{' '}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{' '}
        of <span>{count}</span> results
      </p>
      <div onClick={nextPage} disabled={currentPage === pageCount}>
        <HiOutlineChevronRight className="cursor-pointer rounded-sm bg-indigo-600 text-sm text-white transition-all duration-200 hover:bg-indigo-700 sm:text-base md:p-1 md:text-xl xl:rounded-md xl:text-2xl" />
      </div>
    </div>
  );
}

export default Pagination;
