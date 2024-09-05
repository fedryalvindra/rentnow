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
