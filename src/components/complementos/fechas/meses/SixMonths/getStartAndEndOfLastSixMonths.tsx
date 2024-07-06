export function getStartAndEndOfLastSixMonths() {
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth() - 5, 1); // Primer día hace 6 meses
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);  // Último día del mes actual
  
  // Formateo
  const startOfMonthSix = formatDate(firstDayOfMonth);
  const endOfMonthSix = formatDate(lastDayOfMonth);

  return { startOfMonthSix, endOfMonthSix };
}

function formatDate(date: Date): string {
  const year = date.getUTCFullYear();
  const month = padZeroes(date.getUTCMonth() + 1);
  const day = padZeroes(date.getUTCDate());
  return `${year}-${month}-${day}T00:00:00Z`;
}

function padZeroes(num: number): string {
  return num.toString().padStart(2, '0');
}

export const { startOfMonthSix, endOfMonthSix } = getStartAndEndOfLastSixMonths();

//console.log("INICIO", startOfMonthSix);
//console.log("FINAL", endOfMonthSix);
