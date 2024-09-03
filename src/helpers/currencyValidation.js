export function formattedCurrency(currency) {
  const formattedNumber = new Intl.NumberFormat('id-ID').format(currency);

  return formattedNumber;
}
