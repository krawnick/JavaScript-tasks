/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
  {
    carBrand: 'Mitsubishi',
    price: 400,
    isAvailableForSale: false,
  },
  {
    carBrand: 'Nissan',
    price: 300,
    isAvailableForSale: true,
  },
  {
    carBrand: 'Toyota',
    price: 500,
    isAvailableForSale: true,
  },
]

cars.push({
  carBrand: 'Subaru',
  price: 400,
  isAvailableForSale: false,
})

console.log(cars)
