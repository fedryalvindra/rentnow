function Empty({ data }) {

  if (data === "rents") return (
    <div className="pt-3 text-center text-[10px] md:text-xs xl:text-sm">
      *There is no {data} right now.
    </div>
  );

  return (
    <div className="pt-3 text-center text-[10px] md:text-xs xl:text-sm">
      *There is no {data}, try to add new {data}
    </div>
  );
}

export default Empty;
