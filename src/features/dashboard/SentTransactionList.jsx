import List from '../../ui/List.jsx';

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
  return (
    <List listData={tempData}>
      <List.Title>Sent Transactions</List.Title>
      <List.Items listType="sent" />
    </List>
  );
}

export default SentTransactionList;
