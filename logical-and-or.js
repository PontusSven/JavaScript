let temp = 65;

// And operator - True if both side are true, otherwise false.
// Or operator -True if at least one side is true, false otherwise.

if (temp >= 60 && temp <= 90) {
    console.log('It is very nice outside');
} if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside!');
} else {
    console.log('Do whatever you want');
}

// Challenge

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

// Are both vegan? 'Only offer up vegan dishes'
// at least one is vegan? 'Make sure to offer up some vegan dishes'
// Else, 'Offer up anything on the menu'

if(isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes');
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan dishes');
} else {
    console.log('Offer up anything on the menu');
}