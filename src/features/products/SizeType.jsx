import SizeTypeItem from './SizeTypeItem.jsx';

const tempData = [
  {
    id: 1,
    sizeTypeName: 'Number Size',
  },
  {
    id: 2,
    sizeTypeName: 'Character Size',
  },
];

function SizeType() {
  return (
    <div className="flex items-center gap-2">
      {tempData.map((item) => (
        <SizeTypeItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default SizeType;
