import Skeleton from 'react-loading-skeleton';

function RentLoading() {
  return (
    <div className="border border-gray-50 p-1">
      <Skeleton className='h-10' />
      <Skeleton className='h-24 lg:h-32' />
      <Skeleton className='h-7 md:h-8 lg:h-10' />
      <Skeleton className='h-7 md:h-8 lg:h-20' />
      <Skeleton className='h-7 md:h-8 lg:h-10' />
      <Skeleton className='h-10 lg:h-32' />
    </div>
  );
}

export default RentLoading;
