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


/* console.log(notes.length)
console.log(notes[0])
console.log(notes[notes.length - 1])

console.log(notes)

// Array method
notes.push('My new note')
console.log(notes)

notes.pop()
console.log(notes)

console.log(notes.shift())
console.log(notes.unshift('new unshift'))
console.log(notes)

// Splice
notes.splice(1, 0, 'this is the new item')
console.log(notes)

// replace 
notes[2] = 'this is now the new note 3'
console.log(notes)

notes.forEach(function(item, index) {
    console.log(index)
    console.log(item)
})

*/

/* for (let count = 0; count <= 2; count++) {
    console.log(`Hello, ${count}`)
} 

for (let count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count])
} */

/* const index = notes.findIndex(function (note, index) {
    console.log(note)
    return note.title == 'Habbits to work on'
})
console.log(index) */

const findNote = function (notes, noteTitle) {
     return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
     })
}

/* const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
       return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
} */

const note = findNote(notes, 'Office improvements')
console.log(note)



