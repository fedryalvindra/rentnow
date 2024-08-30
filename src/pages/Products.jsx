import { Outlet } from 'react-router-dom';
import ProductNavBar from '../ui/ProductNavBar.jsx';

function Products() {
  return (
    <section className="space-y-5 p-4 md:w-11/12 xl:w-10/12 xl:space-y-2 xl:p-6 2xl:w-9/12">
      <div className="space-y-6 md:space-y-8 xl:space-y-10">
        <ProductNavBar />
        <div className="space-y-2">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default Products;
