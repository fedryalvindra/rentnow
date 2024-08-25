import Heading from '../../ui/Heading.jsx';
import OutStockProductList from './OutStockProductList.jsx';
import PaidTransactionList from './PaidTransactionList.jsx';
import SentTransactionList from './SentTransactionList.jsx';

function DashboardContainer() {
  return (
    <section className="space-y-2 p-2 md:w-11/12 xl:w-10/12 xl:space-y-6 xl:p-6 2xl:w-9/12">
      <Heading>Dashboard</Heading>
      <div className="grid grid-rows-[1fr_1fr] space-y-7">
        <div className="grid grid-cols-[1fr_1fr] space-x-3 xl:space-x-4">
          <PaidTransactionList />
          <div className="grid grid-rows-[1fr_1fr] space-y-3 xl:space-y-4">
            <SentTransactionList />
            <OutStockProductList />
          </div>
        </div>
        <div className="grid grid-cols-[1fr_10rem] space-x-3 sm:grid-cols-[1fr_13rem] md:grid-cols-[1fr_16rem] xl:grid-cols-[1fr_24rem] 2xl:grid-cols-[1fr_30rem]">
          <div className="bg-white"></div>
          <div className="bg-white"></div>
        </div>
      </div>
    </section>
  );
}

export default DashboardContainer;
