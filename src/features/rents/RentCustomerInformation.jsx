import InputLayout from '../../ui/InputLayout.jsx';

function RentCustomerInformation({
  customer: { fullName, email, address, phoneNum },
}) {
  return (
    <div className="bg-white p-3 space-y-3 rounded-md border">
      <InputLayout>
        <label className="font-semibold" htmlFor="fullName">
          Name
        </label>
        <input
          className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
          type="text"
          id="fullName"
          autoComplete="off"
          value={fullName}
          disabled={true}
        />
      </InputLayout>
      <InputLayout>
        <label className="font-semibold" htmlFor="phoneNum">
          Phone
        </label>
        <input
          className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
          type="text"
          id="phoneNum"
          autoComplete="off"
          value={phoneNum}
          disabled={true}
        />
      </InputLayout>
      <InputLayout>
        <label className="font-semibold" htmlFor="email">
          Email
        </label>
        <input
          className="w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          disabled={true}
        />
      </InputLayout>
      <InputLayout>
        <label className="font-semibold" htmlFor="address">
          Address
        </label>
        <textarea
          className="h-48 w-8/12 border border-gray-200 p-1 focus:outline-none sm:rounded-md"
          id="address"
          autoComplete="off"
          value={address}
          disabled={true}
        />
      </InputLayout>
    </div>
  );
}

export default RentCustomerInformation;
