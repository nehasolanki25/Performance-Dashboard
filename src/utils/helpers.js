export function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const total = numbers.reduce(
    (sum, number) => sum + number,
    0
  );

  return Math.round(total / numbers.length);
}

export function formatNumber(number) {
  return number.toLocaleString();
}