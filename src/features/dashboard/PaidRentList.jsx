import List from '../../ui/List.jsx';
import ListLoading from '../../ui/ListLoading.jsx';
import { useGetPaidRents } from './useGetPaidRents.js';

const tempData = [
  {
    id: 1,
    recipientName: 'Fedry Alvindra',
    transactionDate: '10-10-2024',
    shipmentEstimatedArrived: 3,
    status: 'paid',
    productName: 'Nike shoes',
    productQuantity: 2,
    productImageURL:
      'https://i5.walmartimages.com/asr/fcb6912b-0d57-43b6-a1ac-103f4e9d5bd7_1.2dd4b7f166addfaf199debaa1580a69f.jpeg',
  },
  {
    id: 2,
    recipientName: 'Jonas schedmants',
    transactionDate: '13-10-2024',
    shipmentEstimatedArrived: 2,
    status: 'paid',
    productName: 'Adidas shoes',
    productQuantity: 2,
    productImageURL:
      'http://upload.wikimedia.org/wikipedia/commons/a/ae/An_Adidas_shoe.jpg',
  },
  {
    id: 3,
    recipientName: 'Alvin Nabingo',
    transactionDate: '14-10-2024',
    shipmentEstimatedArrived: 1,
    status: 'paid',
    productName: 'Bomber jacket',
    productQuantity: 1,
    productImageURL:
      'https://cdna.lystit.com/photos/macys/2857951-Navy-1311c7c7-.jpeg',
  },
  {
    id: 4,
    recipientName: 'Indra Kakom',
    transactionDate: '15-10-2024',
    shipmentEstimatedArrived: 2,
    status: 'paid',
    productName: 'Varsity Jacket',
    productQuantity: 3,
    productImageURL:
      'https://tse3.mm.bing.net/th?id=OIP.7qQt37RC_CFZR2txJIa5jQHaIt&pid=Api&P=0&h=180',
  },
];

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
