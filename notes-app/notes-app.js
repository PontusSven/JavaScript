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


const filters = {
    searchText: '' 
}

const userJSON = localStorage.getItem('user')
const user = JSON.parse(userJSON)
console.log(`${user.name} is ${user.age} years old`)

/* const user = {
    name: 'Andrew',
    age: 27
}
const userJSON = JSON.stringify(user)
console.log(userJSON)

localStorage.setItem('user', userJSON)
 */
// CRUD, Create , Read, Update, Delete

// localStorage.setItem('location', 'Philadelphia')

// onsole.log(localStorage.getItem('location'))

// localStorage.removeItem('location')

// localStorage.clear()

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })


    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})
