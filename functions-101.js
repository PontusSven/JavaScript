// Function - input, code, output

let greetUser = function () {
    console.log('Welcome user');
}

let square = function (number) {
    let result = number * number;
    return result;
}

let value = square(3)
console.log(value);

// ******************************** Call funtions ***********************************
greetUser();
square(4);

// Challenge

// convert farenheit to celcius
// argument farenheit output celcius

let convertFahrenheitToCelcius = function (num) {
    let result = (num - 32) * 5/9;
    return result;
}

let celcius = convertFahrenheitToCelcius(32);
let celcius2 = convertFahrenheitToCelcius(68);

// print the convertet values
console.log(celcius2);
console.log(celcius);