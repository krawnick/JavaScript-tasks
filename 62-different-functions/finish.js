/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

console.log(firstFunction(1, 0))
function firstFunction(a, b) {
  return a + b
}
firstFunction = 123

// console.log(secondFunction(2, 0))
const secondFunction = function (a, b) {
  return a + b
}
console.log(secondFunction(2, 0))
// secondFunction = 123
