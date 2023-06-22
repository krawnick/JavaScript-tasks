/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const myString = 'String'
const myNumber = 25
const myBoolean = true
const myNull = null
const myUndefined = undefined
const myObject = {
  name: 'Nikita',
  age: 28,
}
const myArray = [0, 1, 2]

console.log('myString', typeof myString)
console.log('myNumber', typeof myNumber)
console.log('myBoolean', typeof myBoolean)
console.log('myNull', typeof myNull)
console.log('myUndefined', typeof myUndefined)
console.log('myObject', typeof myObject)
