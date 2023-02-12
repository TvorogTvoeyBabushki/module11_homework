// Задание 1

// function amountOddEvenNumber(arr, odd, even) {
//     arr
//         .filter(item => typeof item === 'number')
//         .map(item => {
//             if (item === 0) {
//                 console.log('Число 0')
//             } else if (item % 2 !== 0) {
//                 odd += 1
//             } else {
//                 even += 1
//             }
//         })
//     return `Количество нечётных чисел: ${odd}, количество чётных чисел: ${even}`
// }

// console.log(amountOddEvenNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'text', '2', null, 17], 0, 0))

// Задание 2

// function primeNumber(numb) {
//     let result = 'Простое число'
//     if (numb > 1000) {
//         result = 'Данные неверны'
//     } else if (numb === 0 || numb === 1) {
//         result = `Число ${numb}`
//     } else {
//         for (let i = 2; i < numb; i++) {
//             if (numb % i === 0) {
//                 result = 'Составное число'
//                 break
//             }
//         }
//     }
//     return result
// }

// console.log(primeNumber(25))

// Задание 3

// function summNumbers(numbOne) {
//     return function insideFunction(numbTwo) {
//         return numbOne + numbTwo
//     }
// }
// const result = summNumbers(3)(10)
// console.log(result)

// Задание 4

// function printNumbers(numbOne, numbTwo) {
//     let timerId = setInterval(function(){
//         console.log(numbOne)
//         if (numbOne === numbTwo) clearInterval(timerId)
//         numbOne++
//     }, 1000)
// }
// printNumbers(1, 10)

// Задание 5

// const powerNaturalNumber = (x, n) => {
//     if (x >= 0) {
//         return Math.pow(x, n)
//     }
// }
// console.log(powerNaturalNumber(10, 4))