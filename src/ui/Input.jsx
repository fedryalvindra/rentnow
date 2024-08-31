import AddButton from './AddButton.jsx';

function Input({
  handleSubmit,
  value,
  setValue,
  isLoading,
  placeholder,
  button,
}) {
  return (
    <form
      className="grid grid-cols-[1fr_auto] space-x-1"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border pl-1 text-[10px] focus:outline-none md:text-xs xl:text-sm"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={isLoading}
      />
      <AddButton button={button} />
    </form>
  );
}

export default Input;
