let name = 'Pontus Svensson'

let nameLenght = console.log(name.length)

// convert to upper case
name.toUpperCase()

console.log(name.toUpperCase())

// convert to lower case
console.log(name.toLowerCase())

// includes method
let password = 'abc123password098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

// Challenge

// IsValidPassword
// Lenght is more than 8 - and it doesnt contain the word password = true -- else false

let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes('password')) {
        return true
    } else {
        return false
    }
}

console.log(isValidPassword('aasd'))
console.log(isValidPassword('aasasdasdsadasdasd'))
console.log(isValidPassword('aapassword'))