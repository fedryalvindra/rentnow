import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';
import { useEffect, useState } from 'react';

function AppLayout() {
  const [isSidebar, setIsSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(min-width: 640px)').matches) {
        setIsSidebar(true);
      } else {
        setIsSidebar(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="grid h-dvh w-full grid-rows-[2rem_1fr] overflow-y-hidden xl:grid-rows-[3rem_1fr]">
      <Header setIsSidebar={setIsSidebar} />
      <div
        className={`${isSidebar && 'grid grid-cols-[7rem_1fr]'} min-h-0 md:grid-cols-[9rem_1fr] lg:grid-cols-[10rem_1fr] 2xl:grid-cols-[15rem_1fr]`}
      >
        {isSidebar && <Sidebar />}
        <main className="h-full w-full overflow-y-scroll md:flex md:items-start md:justify-center">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
