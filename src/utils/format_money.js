/**
 * Formatea un valor numérico como moneda en formato mexicano (MXN).
 * @param {number|string} value - El valor numérico que se desea formatear como moneda.
 * @returns {string} - El valor formateado como moneda en pesos mexicanos (MXN).
 */
export function formatMonet (value) {
  const parsedValue = parseInt(value)
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(parsedValue)
}
