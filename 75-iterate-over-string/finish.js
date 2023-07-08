/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

// const qtyLetters = (count, letters) => {
// }

str.split('').forEach((letter) => {
  if (vowels.includes(letter)) {
    vowelsCount++
  }
})

// for (const letter of str) {
//   if (vowels.includes(letter)) {
//     vowelsCount++
//   }
// }

// Напишите код здесь

console.log(vowelsCount)
// 9
