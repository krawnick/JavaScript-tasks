/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

// class ExtendedArray extends Array {
//   sum(array) {
//     return array.reduce((sum, num) => sum + num)
//   }
//   onlyNumbers(array) {
//     return this.filter((el) => typeof el === 'number')
//   }
// }

class ExtendedArray extends Array {
  sum() {
    return this.reduce((sum, num) => sum + num)
  }
  onlyNumbers() {
    return this.filter((el) => typeof el === 'number')
  }
}

const myArray = new ExtendedArray(1, 2, 3, 4)
console.log(myArray.sum())
const myArray2 = new ExtendedArray(1, 'a', 2, 'b', 3, 'c', 4, 'd')
console.log(myArray2.onlyNumbers())

myArray2.forEach((el) => {
  console.log(el)
})
/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */
