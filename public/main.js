function main() {
  const numberOfCupsOfCoffee = 3
  const fullName = 'Lucas Safly'
  console.log(
    `My name is ${fullName}, I have ${numberOfCupsOfCoffee} cups of coffee a day.`
  )
  const aboutMe = {
    myFavoriteMovies: ['Fear and Loathing', 'Inception', 'Billions'],
    fullName: 'Lucas Safly',
    luckyNumber: 13,
  }

  const userName = prompt('Please enter your name')
  console.log(`Hello ${userName} Welcome to my program`)

  let firstOperand = parseFloat(prompt('Give me a number'))
  let secondOperand = parseFloat(prompt('Give me another number'))

  let sum = firstOperand + secondOperand
  let difference = firstOperand - secondOperand
  let product = firstOperand * secondOperand
  let quotient = firstOperand / secondOperand
  let remainder = firstOperand % secondOperand

  console.log(
    `The sum is ${sum}, difference is ${difference}, product is ${product}, quotient is ${quotient}, remainder is ${remainder} `
  )
  let numbers = [
    41,
    16,
    71,
    70,
    85,
    98,
    89,
    60,
    42,
    81,
    58,
    99,
    61,
    91,
    82,
    49,
    55,
    33,
    83,
    67,
    76,
    67,
    86,
    16,
    64,
    77,
    94,
    36,
    20,
    66,
    79,
    26,
    33,
    82,
    68,
    34,
    97,
    75,
    55,
    68,
    9,
    52,
    67,
    99,
    21,
    80,
    62,
    62,
    55,
    94,
    38,
    37,
    94,
    54,
    4,
    54,
    26,
    98,
    50,
    45,
    78,
    17,
    5,
    70,
    91,
    84,
    99,
    21,
    1,
    93,
    3,
    97,
    74,
    38,
    6,
    4,
    76,
    53,
    64,
    94,
    5,
    83,
    11,
    36,
    15,
    93,
    97,
    87,
    85,
    69,
    19,
    46,
    21,
    87,
    81,
    9,
    81,
    6,
    71,
    85,
  ]

  let smallest = numbers[0]
  let largest = numbers[0]
  sum = 0

  for (let index = 0; index < numbers.length; index++) {
    if (smallest > numbers[index]) {
      smallest = numbers[index]
    }
    if (largest < numbers[index]) {
      largest = numbers[index]
    }
    sum += numbers[index]
  }
  console.log(smallest)
  console.log(largest)

  let statistics = {
    smallest,
    largest,
    sum,
    average: sum / numbers.length,
  }
  console.log(statistics)
}
document.addEventListener('DOMContentLoaded', main)
