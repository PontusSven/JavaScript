let num = 5.12

// ToFixed - how many decimals you want to show
console.log(num.toFixed(1))

// Math.round - round the number
console.log(Math.round(num))

// Math.floor - round down
console.log(Math.floor(num))

// Math.ceil - round up
console.log(Math.ceil(num))

// Math.random - randomize a number // 0 - 0.9999
let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)