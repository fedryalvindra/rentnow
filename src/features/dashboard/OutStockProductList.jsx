import List from '../../ui/List.jsx';

const tempData = [
  {
    id: 1,
    productName: 'Nike shoes',
    productImageURL:
      'https://i5.walmartimages.com/asr/fcb6912b-0d57-43b6-a1ac-103f4e9d5bd7_1.2dd4b7f166addfaf199debaa1580a69f.jpeg',
  },
  {
    id: 2,
    productName: 'Blue varsity',
    productImageURL:
      'https://www.jacketsexpert.com/wp-content/uploads/2022/06/neutrals-blue-varsity-jacket-scaled.jpg',
  },
  {
    id: 3,
    productName: 'Leather varsity',
    productImageURL:
      'https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2716000/ff_2716993_full.jpg',
  },
  {
    id: 4,
    productName: 'Leather jacket',
    productImageURL:
      'https://i5.walmartimages.com/asr/d352618b-5deb-47ce-86a4-8f8ae205bd82_1.0613b965a1cf3c7a8a541409e321807c.jpeg',
  },

  {
    id: 5,
    productName: 'Adidas shoes',
    productImageURL:
      'http://upload.wikimedia.org/wikipedia/commons/a/ae/An_Adidas_shoe.jpg',
  },
];

function OutStockProductList() {
  return (
    <List listData={tempData}>
      <List.Title>Outstock Products</List.Title>
      <List.Items listType="outstock" />
    </List>
  );
}

export default OutStockProductList;
