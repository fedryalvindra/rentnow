import { HiOutlineDocumentRemove } from 'react-icons/hi';

function RentDetailReportHeader({ rent: { status } }) {
  const statusColor = {
    complete:
      'bg-green-300 text-green-600 hover:bg-green-400 transition-all duration-300 ease-in',
    unconfirmed:
      'bg-sky-300 text-sky-600 hover:bg-sky-400 transition-all duration-300 ease-in',
    rented:
      'bg-orange-300 text-orange-600 hover:bg-orange-400 transition-all duration-300 ease-in',
    paid: 'bg-yellow-300 text-yellow-600 hover:bg-yellow-400 transition-all duration-300 ease-in',
  };

  return (
    <div className="grid grid-cols-[auto_auto_1fr] bg-indigo-500 p-2 font-semibold text-white md:py-3 lg:px-5 lg:text-sm">
      <div className="content-center text-lg">
        <HiOutlineDocumentRemove />
      </div>
      <div className="content-center pl-2">Rent Detail</div>
      <div className="flex items-center justify-end">
        <div className={`${statusColor[status]} cursor-pointer p-1 px-4 lg:px-10 rounded-full`}>{status.toUpperCase()}</div>
      </div>
    </div>
  );
}

export default RentDetailReportHeader;
