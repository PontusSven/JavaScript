// Global Scope (convertFahrenheitToCelcius, let celcius, let celcius 2)
    // Function Srope (num, let result)
        // Local scope (isFreezing)

let convertFahrenheitToCelcius = function (num) {
    let result = (num - 32) * 5/9;

    if (result <= 0) {
        let isFreezing = true;
    }
    return result;
}

let celcius = convertFahrenheitToCelcius(32);
let celcius2 = convertFahrenheitToCelcius(68);

console.log(celcius2);
console.log(celcius);