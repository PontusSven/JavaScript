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

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all-notes').addEventListener('click', function () {
    console.log('Remove all notes')
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
})


})