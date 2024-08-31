import { Outlet } from 'react-router-dom';
import ProductNavBar from '../ui/ProductNavBar.jsx';
import PagesLayout from '../ui/PagesLayout.jsx';

function Products() {
  return (
    <PagesLayout>
      <div className="space-y-6 md:space-y-8 xl:space-y-10">
        <ProductNavBar />
        <div className="space-y-2">
          <Outlet />
        </div>
      </div>
    </PagesLayout>
  );
}

export default Products;
