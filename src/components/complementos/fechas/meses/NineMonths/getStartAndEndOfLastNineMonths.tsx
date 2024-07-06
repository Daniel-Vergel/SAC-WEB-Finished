export function getStartAndEndOfLastNineMonths() {
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth() - 8, 1); // Primer día hace 9 meses
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);  // Último día del mes actual
  
  // Formateo
  const startOfMonthNine = formatDate(firstDayOfMonth);
  const endOfMonthNine
   = formatDate(lastDayOfMonth);

  return { startOfMonthNine, endOfMonthNine };
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

export const { startOfMonthNine, endOfMonthNine } = getStartAndEndOfLastNineMonths();

