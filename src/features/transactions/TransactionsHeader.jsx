import Filter from '../../ui/Filter.jsx';
import Heading from '../../ui/Heading.jsx';
import Search from '../../ui/Search.jsx';
import Sortby from '../../ui/Sortby.jsx';

function TransactionsHeader() {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <Heading>Transactions</Heading>
        <Search placeholder="Search transaction by id" />
      </div>
      <div className="flex justify-end gap-1">
        <Filter>
          <Filter.Items
            items={['all', 'unconfirmed', 'paid', 'sent', 'confirmed']}
            filterField="status"
          />
        </Filter>
        <Sortby />
      </div>
    </div>
  );
}

export default TransactionsHeader;
