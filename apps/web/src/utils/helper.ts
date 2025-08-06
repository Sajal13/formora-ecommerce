export const currencyFormat = (
  amount: number,
  options: Intl.NumberFormatOptions = {}
) => {
  return new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    ...options
  }).format(amount);
};
