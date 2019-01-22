
// === equality operator ( !== )
// < - less than operator
// > - greater than operator
// <= - less than or equalt to
// >= - greater than or equal to


let temp = 80;
let isFreezing = temp === 32;

if (temp <= 32) {
    console.log('Is it freezing outside!');
}

if (temp >= 100) {
    console.log('It is way to hot outside!');
}

if (temp >= 33 || temp <= 99) {
    console.log('It is very pleasant outside!')
}



// Challenge

// Create age set to your age
let myAge = 61;

// Calculate is chiild - if they are 7 or under
let isChild = myAge <= 7;

// Calculate is senior - if they are 65 or older
let isSenior = myAge >= 65;

// print is child value
console.log('Child is ' + isChild);

// print is senior value
console.log('Senior is ' + isSenior);


// Challenge nr 2

// if 7 or under print msg about child pricing
if (myAge < 7 ) {
    console.log('Tickets for children are free');
}
// if 65 or older print msg about senior pricing
else if (myAge >= 65) {
    console.log('Senior tickets cost 1$');
}
// print out else
else {
    console.log('Tickets are 5$');
}

