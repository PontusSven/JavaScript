let isAccountLocked = true;
let userRole = 'admin';

if (isAccountLocked) {
    console.log('Account is locked');
} else if (userRole === 'admin') {
    console.log('Welcome Admin');
} else {
    console.log('Welcome!');
}

// Challenge 
let temp = 4;
// It is freezing outside
if (temp <= 32) {
    console.log('It is freezing outside!');
} else if (temp >= 120) {
    console.log('It is hot outside!')
} else {
    console.log('Go for it. It is pretty nice!')
}
// It is hot outside
// Go for it. It is pretty nice.

