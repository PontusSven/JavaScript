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

document.querySelector('button').addEventListener('click', function (e) {
    e.target.textContent = 'The busson was clicked'
})
