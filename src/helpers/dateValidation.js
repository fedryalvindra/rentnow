export function formattedDate(date) {
  const dateObj = new Date(date);

  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
  const year = dateObj.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}

export function calculateNumDays(startDate, endDate) {
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);
  const differenceMilliseconds = endDateObj - startDateObj;
  const differenceInDays = differenceMilliseconds / (1000 * 60 * 60 * 24);
  return differenceInDays;
}

export function formattedTotalDate(date) {
  const dateObj = new Date(date);

  const options = { month: 'short', day: 'numeric' };
  const formattedDate = dateObj.toLocaleDateString('en-US', options);

  return formattedDate;
}

export function sumSameDate(arr) {
  const result = Object.values(
    arr.reduce((acc, { startDate, totalPrice }) => {
      if (acc[startDate]) {
        acc[startDate].totalPrice += totalPrice;
      } else {
        acc[startDate] = { startDate, totalPrice };
      }
      return acc;
    }, {}),
  );
  return result;
}

export function formattedWithYearDate(date) {
  const dateObj = new Date(date);

  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const formattedDate = dateObj.toLocaleDateString('en-US', options);

  return formattedDate;
}
