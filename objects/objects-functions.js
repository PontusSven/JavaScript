let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howoard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary);

// Challenge

// create function - take fahrenheit in - return object with all three temps

let convertFahrenheit = function (temp) {
    return {
        celcius: (temp - 32) * (5 / 9),
        kelvin: (temp + 459.67) * (5 / 9),
        fahrenheit: temp
    }
}

let tempSummary = convertFahrenheit(74)
console.log(tempSummary)