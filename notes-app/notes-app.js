const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habbits to work on',
    body: 'Exercise. Eating better'
},{
    title: 'Office improvements',
    body: 'Get a better chair'
}]

// DOM - Document Object Model

// Query and remove
const p = document.querySelector('p')
// p.remove()

// Query all and remove
const ps = document.querySelectorAll('p')
ps.forEach(function (p) {
    p.textContent = '*******'
    // p.remove()
    // console.log(p.textContent)
})

// Add a new element

const newParagraph = document.createElement('p')
newParagraph.textContent = 'Hello this is the new paragraph'
document.querySelector('body').appendChild(newParagraph)

