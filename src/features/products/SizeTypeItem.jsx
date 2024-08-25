import { HiPencil } from 'react-icons/hi';

function SizeTypeItem({ item }) {
  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-full bg-gray-200 p-1 px-3 text-[8px] sm:text-[10px] lg:text-xs xl:text-sm">
      {item.sizeTypeName}
      <HiPencil />
    </div>
  );
}

export default SizeTypeItem;
