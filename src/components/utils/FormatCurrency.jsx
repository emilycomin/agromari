export default function FormatCurrency(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    maximumFractionDigits: 2,
    currency: "BRL",
  });
}
