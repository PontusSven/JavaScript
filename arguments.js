// Multiple arguments
let add = function (a, b) {
    return a + b
}

let result = add(4, 5);
console.log(result)

// Default arguments

let getScoreText = function (name = 'Player', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score;
}

let scoreText = getScoreText(undefined, 100);
console.log(scoreText)

// Challenge

let getTip = function (total, tipPercentage = 0.2) {
    return total * tipPercentage
}

let tip = getTip(100, undefined);
console.log('The tip is: ' + tip);