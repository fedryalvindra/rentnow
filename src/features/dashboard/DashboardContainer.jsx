import { MdOutlineAttachMoney, MdOutlineCarRental } from 'react-icons/md';
import { TbProgress } from 'react-icons/tb';
import Heading from '../../ui/Heading.jsx';
import SalesChartLoading from '../../ui/SalesChartLoading.jsx';
import TotalStatus from '../../ui/TotalStatus.jsx';
import PaidRentList from './PaidRentList.jsx';
import RentedRentList from './RentedRentList.jsx';
import SalesChart from './SalesChart.jsx';
import { useGetTotalSalesRents } from './useGetTotalSalesRents.js';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { useGetTotalPaid } from './useGetTotalPaid.js';
import { useGetTotalUnconfirmed } from './useGetTotalUnconfirmed.js';
import { useGetTotalRented } from './useGetTotalRented.js';
import { useGetTotalComplete } from './useGetTotalComplete.js';
import Skeleton from 'react-loading-skeleton';

function DashboardContainer() {
  const { data: totalSalesRaw, isLoading } = useGetTotalSalesRents();
  const { data: totalUnconfirmed, isLoading: isLoadingUnconfirmed } =
    useGetTotalUnconfirmed();
  const { data: totalPaid, isLoading: isLoadingPaid } = useGetTotalPaid();
  const { data: totalRented, isLoading: isLoadingRented } = useGetTotalRented();
  const { data: totalComplete, isLoading: isLoadingComplete } =
    useGetTotalComplete();

  const isLoadingStatus =
    isLoading ||
    isLoadingPaid ||
    isLoadingUnconfirmed ||
    isLoadingRented ||
    isLoadingComplete;

  return (
    <section className="w-full space-y-2 p-2 md:w-11/12 xl:w-10/12 xl:space-y-6 xl:p-6 2xl:w-9/12">
      <Heading>Dashboard</Heading>
      <div className="flex flex-wrap items-center gap-5">
        {isLoadingStatus ? (
          <div className="w-full">
            <Skeleton className="h-28 w-full" />
          </div>
        ) : (
          <>
            <TotalStatus
              icon={<TbProgress />}
              count={totalUnconfirmed}
              type="unconfirmed"
            />
            <TotalStatus
              icon={<MdOutlineAttachMoney />}
              count={totalPaid}
              type="paid"
            />
            <TotalStatus
              icon={<MdOutlineCarRental />}
              count={totalRented}
              type="rented"
            />
            <TotalStatus
              icon={<FaRegCircleCheck />}
              count={totalComplete}
              type="complete"
            />
          </>
        )}
      </div>
      <div className="grid grid-rows-[auto_1fr] space-y-6">
        <div className="grid grid-cols-[1fr_1fr] space-x-3 xl:space-x-2">
          <PaidRentList />
          <RentedRentList />
        </div>
        <div>
          {isLoading ? (
            <SalesChartLoading />
          ) : (
            <SalesChart totalSalesRaw={totalSalesRaw} />
          )}
        </div>
      </div>
    </section>
  );
}

export default DashboardContainer;
