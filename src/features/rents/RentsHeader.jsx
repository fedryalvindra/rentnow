import Filter from '../../ui/Filter.jsx';
import Heading from '../../ui/Heading.jsx';
import Search from '../../ui/Search.jsx';
import Sortby from '../../ui/Sortby.jsx';

function RentsHeader() {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <Heading>Rents</Heading>
        <Search placeholder="Search reservation by id" />
      </div>
      <div className="flex justify-end gap-1">
        <Filter>
          <Filter.Items
            items={['all', 'unconfirmed', 'paid', 'rented', 'complete']}
            filterField="status"
          />
        </Filter>
        <Sortby />
      </div>
    </div>
  );
}

export default RentsHeader;
