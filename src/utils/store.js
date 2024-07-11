/**
 * Almacena un valor en el localStorage bajo una clave específica.
 * @param {string} key - La clave bajo la cual se almacenará el valor.
 * @param {any} value - El valor que se desea almacenar. Debe ser serializable.
 */
function setLocalStorageItem (key, value) {
  const parseValue = JSON.stringify(value)
  window.localStorage.setItem(key, parseValue)
}

/**
 * Recupera un valor almacenado en el localStorage bajo una clave específica.
 * @param {string} key - La clave del valor que se desea recuperar.
 * @returns {any} El valor almacenado, parseado desde JSON, o un array vacío si no se encuentra.
 */
function getLocalStorageItem (key) {
  const stored = window.localStorage.getItem(key)
  if (stored) return JSON.parse(stored)
  return []
}

export { setLocalStorageItem, getLocalStorageItem }
