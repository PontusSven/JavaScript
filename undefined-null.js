// Undefined for variable
let name

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// Undefined for funtion arguments
// Undefined as the function return default value
let square = function (num) {
    console.log(num)
}

let result = square();

console.log(result);

// Null as assigned value
let age = 26;

age = null;

console.log(age);

