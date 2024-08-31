import Skeleton from 'react-loading-skeleton';

function TableLoading({ type, count }) {
  const styles = {
    products: {
      header: 'h-5 md:h-9 xl:h-10',
      body: 'h-8 sm:h-11 md:h-12 lg:h-16 xl:h-[70px]',
    },
    categories: {
      header: 'h-5 sm:h-5 md:h-9 lg:h-10',
      body: 'h-8 sm:h-9 md:h-11 lg:h-12',
    },
    shipments: {
      header: 'h-5 sm:h-5 md:h-9 lg:h-10',
      body: 'h-8 sm:h-9 md:h-11 lg:h-12',
    },
  };

  // {styles[type].body}
  return (
    <>
      <Skeleton className={styles[type].header} />
      <Skeleton className={styles[type].body} count={count} />
    </>
  );
}

export default TableLoading;
