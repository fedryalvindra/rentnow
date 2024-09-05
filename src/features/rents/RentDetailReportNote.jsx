function RentDetailReportNote({ rent: { note } }) {
  return (
    <div className="flex flex-col space-y-1 p-2 md:space-y-2 lg:space-y-3 lg:p-5">
      <div className="text-xs font-semibold md:text-sm">Note</div>
      <div className="text-[10px] md:text-sm">{note ? note : '-'}</div>
    </div>
  );
}

export default RentDetailReportNote;
