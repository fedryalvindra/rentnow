function InputLayout({ children, error, type, datePosition = '' }) {
  if (type === 'date')
    return (
      <div className={`text-xs md:text-sm xl:text-base ${datePosition}`}>
        <div className="flex items-center gap-4">{children}</div>
        {error && <p className="pt-1 text-red-500">*{error}</p>}
      </div>
    );

  return (
    <div className="text-xs md:text-sm xl:text-base">
      <div className="flex items-center justify-between">{children}</div>
      {error && <p className="pt-1 text-red-500">*{error}</p>}
    </div>
  );
}

export default InputLayout;
