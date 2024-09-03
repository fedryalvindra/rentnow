export function formattedDate(date) {
  const dateObj = new Date(date);

  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
  const year = dateObj.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}
