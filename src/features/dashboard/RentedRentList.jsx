import List from '../../ui/List.jsx';
import ListLoading from '../../ui/ListLoading.jsx';
import { useGetRentedRents } from './useGetRentedRents.js';

const tempData = [
  {
    id: 1,
    recipientName: 'Fedry Alvindra',
    transactionDate: '10-10-2024',
    shipmentEstimatedArrived: 3,
    status: 'sent',
    productName: 'Nike shoes',
    productQuantity: 2,
    shipmentName: 'JNT',
  },
  {
    id: 2,
    recipientName: 'Jonas',
    transactionDate: '11-10-2024',
    shipmentEstimatedArrived: 3,
    status: 'sent',
    productName: 'Bomber jacket',
    productQuantity: 1,
    shipmentName: 'GOJEK',
  },
  {
    id: 3,
    recipientName: 'Joko ako gunawan',
    transactionDate: '12-10-2024',
    shipmentEstimatedArrived: 3,
    status: 'sent',
    productName: 'Varsity jacket',
    productQuantity: 1,
    shipmentName: 'JNE',
  },
  {
    id: 4,
    recipientName: 'Dika sah galih',
    transactionDate: '13-10-2024',
    shipmentEstimatedArrived: 3,
    status: 'sent',
    productName: 'Adidas shoes',
    productQuantity: 3,
    shipmentName: 'GOJEK',
  },
  {
    id: 5,
    recipientName: 'Jordy',
    transactionDate: '13-10-2024',
    shipmentEstimatedArrived: 3,
    status: 'sent',
    productName: 'Adidas shoes',
    productQuantity: 3,
    shipmentName: 'GOJEK',
  },
];

function SentTransactionList() {
  const { data, isLoading } = useGetRentedRents();
  if (isLoading) return <ListLoading />;

  return (
    <List listData={data}>
      <div className="xl:p-2 2xl:py-4">
        <List.Title>Rented Rents</List.Title>
      </div>
      {!data?.length ? (
        <div className="pt-5 text-center text-[10px] xl:pt-0 xl:text-xs">
          There is no paid rent
        </div>
      ) : (
        <List.Items listType="rented" />
      )}
    </List>
  );
}

export default SentTransactionList;
