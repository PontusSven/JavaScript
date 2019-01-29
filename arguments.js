// Multiple arguments
let add = function (a, b) {
    return a + b
}

let result = add(4, 5);
console.log(result)

// Default arguments

let getScoreText = function (name = 'Player', score = 0) {
    // return 'Name: ' + name + ' - Score: ' + score;
    return `Name: ${name} - Score: ${score}`;
}

let scoreText = getScoreText(undefined, 100);
console.log(scoreText)

// Challenge
let getTip = function (total, tipPercentage = 0.2) {
    let percentage = tipPercentage * 100;
    let tip = total * tipPercentage;
    return `A ${percentage}% tip on $${total} would be $${tip}`
}

let tip = getTip(60, undefined);
console.log(tip);
// console.log('The tip is: ' + tip);

// template strings
let name = 'Jen';
let age = 12;
console.log(`Hey, my name is ${name}! I am ${age} years old.`)

