export function getStartAndEndOfWeek() {
    const today = new Date();
    const firstDayOfWeek = new Date(today);
    const lastDayOfWeek = new Date(today);
  
    const diff = (today.getDay() + 6) % 7; // Diferencia de días para retroceder al inicio de la semana (lunes: 1, domingo: 0)
  
    firstDayOfWeek.setDate(today.getDate() - diff);
    lastDayOfWeek.setDate(today.getDate() - diff + 6);
  
    // Formatear las fechas en formato ISO8601 (YYYY-MM-DD)
    const startOfWeek = firstDayOfWeek.toISOString().split('T')[0];
    const endOfWeek = lastDayOfWeek.toISOString().split('T')[0];
  
    return { startOfWeek, endOfWeek };
  }
  
  export const { startOfWeek, endOfWeek } = getStartAndEndOfWeek();


