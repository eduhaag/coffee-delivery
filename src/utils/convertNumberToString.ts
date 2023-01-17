export function convertNumberToCurrencyFormat(value: number): string {
  return value.toFixed(2).replace('.', ',')
}
