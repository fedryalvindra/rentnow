function TotalStatus({ count, icon, type }) {
  const styles = {
    paid: 'bg-yellow-200 text-yellow-600 border border-yellow-300 hover:bg-yellow-300 transition-all duration-200 ease-in',
    unconfirmed:
      'bg-sky-200 text-sky-600 border border-sky-300 hover:bg-sky-300 transition-all duration-200 ease-in',
    complete:
      'bg-green-200 text-green-600 border border-green-300 hover:bg-green-300 transition-all duration-200 ease-in',
    rented:
      'bg-orange-200 text-orange-600 border border-orange-300 hover:bg-orange-300 transition-all duration-200 ease-in',
  };
  return (
    <div className="flex cursor-pointer">
      <div
        className={`flex items-center text-xs ${styles[type]} gap-2 rounded-lg p-2 sm:text-sm lg:text-2xl xl:w-52 xl:gap-5 xl:p-5`}
      >
        {icon}{' '}
        <div className="flex flex-col text-[8px] text-xs font-semibold">
          {type.toUpperCase()}
          <div className="text-xs font-light sm:text-sm lg:text-xl">
            {!count ? '-' : count}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalStatus;
