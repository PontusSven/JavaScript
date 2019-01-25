var varOne = 'varOne';

// Global Scope - Defined outside of all code blocks
// Local Scrope - Defined inside a code block



if(true) {
    console.log(varOne);
    let varTwo = 'varTwo';

    if (true) {
        let varFour = 'varFour';
    }
}

if (true) {
    let varThree = 'varThree';
}

console.log(varTwo);

