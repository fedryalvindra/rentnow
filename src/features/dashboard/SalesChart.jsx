import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  formattedTotalDate,
  formattedWithYearDate,
  sumSameDate,
} from '../../helpers/dateValidation.js';

const fakeData = [
  {
    label: 'Jan 09',
    totalSales: 4800000,
  },
  {
    label: 'Jan 10',
    totalSales: 3000000,
  },
  {
    label: 'Jan 11',
    totalSales: 2300000,
  },
  {
    label: 'Jan 12',
    totalSales: 5800000,
  },
  {
    label: 'Jan 13',
    totalSales: 900000,
  },
  {
    label: 'Jan 14',
    totalSales: 4000000,
  },
  {
    label: 'Jan 15',
    totalSales: 2200000,
  },
  {
    label: 'Jan 16',
    totalSales: 1200000,
  },
  {
    label: 'Jan 17',
    totalSales: 7200000,
  },
  {
    label: 'Jan 18',
    totalSales: 3200000,
  },
  {
    label: 'Jan 19',
    totalSales: 2500000,
  },
  {
    label: 'Jan 20',
    totalSales: 1200000,
  },
  {
    label: 'Jan 21',
    totalSales: 1200000,
  },
];

function SalesChart({ totalSalesRaw = [] }) {
  const sumDate = sumSameDate(totalSalesRaw);
  const totalSalesData = sumDate.map((totalSale) => {
    return {
      label: formattedTotalDate(totalSale.startDate),
      totalSales: totalSale.totalPrice,
    };
  });

  return (
    <div className="w-full space-y-5 rounded-lg border border-slate-100 bg-white p-1 shadow-sm xl:p-5">
      <h1 className="flex items-center gap-3 pt-3 text-xs font-semibold xl:text-base">
        Sales from {formattedWithYearDate(totalSalesRaw?.at(0).startDate)}{' '}
        <HiOutlineArrowNarrowRight />{' '}
        {formattedWithYearDate(totalSalesRaw?.at(-1).startDate)}
      </h1>
      <ResponsiveContainer width={'100%'} height={280}>
        <AreaChart data={totalSalesData}>
          <XAxis
            dataKey="label"
            className="text-[8px] sm:text-[10px] lg:text-xs"
            tickLine={{ stroke: '#6366f1' }}
          />
          <YAxis className="text-[6px] sm:text-[10px] lg:text-xs" />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke="#7470a8"
            fill="#6366f1"
            strokeWidth={2}
            name="Total sales"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
