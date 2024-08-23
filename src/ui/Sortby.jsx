function Sortby() {
  return (
    <select className="w-20 text-[10px] sm:text-xs md:w-40">
      <option value="A-Z">Sort by date (recent first)</option>
      <option value="Z-A">Sort by alphabet (a-z)</option>
    </select>
  );
}

export default Sortby;
