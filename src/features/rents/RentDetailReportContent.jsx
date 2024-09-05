import RentDetailReportCar from './RentDetailReportCar.jsx';
import RentDetailReportCustomer from './RentDetailReportCustomer.jsx';
import RentDetailReportNote from './RentDetailReportNote.jsx';
import RentDetailReportTotalPrice from './RentDetailReportTotalPrice.jsx';

function RentDetailReportContent({ rent }) {
  return (
    <div className="bg-white">
      <RentDetailReportCustomer rent={rent} />
      <RentDetailReportCar rent={rent}/>
      <RentDetailReportTotalPrice rent={rent} />
      <RentDetailReportNote rent={rent}/>
    </div>
  );
}

export default RentDetailReportContent;
