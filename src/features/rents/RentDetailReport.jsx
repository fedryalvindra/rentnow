import RentDetailReportContent from './RentDetailReportContent.jsx';
import RentDetailReportHeader from './RentDetailReportHeader.jsx';

function RentDetailReport({ rent }) {
  return (
    <div className="overflow-hidden border text-[8px] md:rounded-lg md:text-[10px] lg:text-xs">
      <RentDetailReportHeader rent={rent} />
      <RentDetailReportContent rent={rent} />
    </div>
  );
}

export default RentDetailReport;
