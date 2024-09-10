import List from '../../ui/List.jsx';
import ListLoading from '../../ui/ListLoading.jsx';
import { useGetPaidRents } from './useGetPaidRents.js';

function PaidTransactionList() {
  const { data, isLoading } = useGetPaidRents();
  if (isLoading) return <ListLoading />;

  return (
    <List listData={data}>
      <div className="xl:p-2 2xl:py-4">
        <List.Title>Paid Rents</List.Title>
      </div>
      {!data?.length ? (
        <div className="pt-5 text-center text-[10px] xl:pt-0 xl:text-xs">
          There is no paid rent
        </div>
      ) : (
        <List.Items listType="paid" />
      )}
    </List>
  );
}

export default PaidTransactionList;
