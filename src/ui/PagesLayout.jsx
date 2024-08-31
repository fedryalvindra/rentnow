function PagesLayout({ children }) {
  return (
    <section className="space-y-5 p-4 md:w-11/12 xl:w-10/12 xl:space-y-2 xl:p-6 2xl:w-9/12">
      {children}
    </section>
  );
}

export default PagesLayout;
