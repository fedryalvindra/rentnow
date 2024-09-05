import { formattedCurrency } from '../../helpers/currencyValidation.js';

function RentDetailReportCar({
  rent: {
    numDays,
    Car: { carName, plateNumber, carImageURL, carPrice, discount },
  },
}) {
  return (
    <div className="text-[10px] md:text-xs lg:text-sm">
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] bg-gray-50 p-1 font-semibold md:p-2">
        <div className="content-center text-center">Car</div>
        <div></div>
        <div className="content-center text-center">Plate</div>
        <div className="content-center text-center">Rent Days</div>
        <div className="content-center text-center">Price per day</div>
        <div className="content-center text-center">Discount per day</div>
      </div>
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] p-2 lg:p-5">
        <div>
          <img
            className="h-5 w-full content-center bg-white object-scale-down sm:h-7 lg:h-12 xl:h-14"
            src={carImageURL}
          />
        </div>
        <div className="content-center text-center">{carName}</div>
        <div className="content-center text-center">{plateNumber}</div>
        <div className="content-center text-center">{numDays} Days</div>
        <div className="content-center text-center">
          Rp {formattedCurrency(carPrice)}
        </div>
        <div className={`content-center text-center ${discount && "text-green-500 font-semibold"}`}>
          {discount ? `Rp ${formattedCurrency(discount)}` : '-'}
        </div>
      </div>
    </div>
  );
}

export default RentDetailReportCar;
