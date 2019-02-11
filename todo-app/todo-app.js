const todo = [{
    text: 'Clean',
    completed: true
},{
    text: 'Train',
    completed: false
},{
    text: 'Make dinner',
    completed: false
},{
    text: 'Walk the dog',
    completed: true
},{ 
    text: 'Buy groceries',
    completed: true
}]

document.querySelector('#add-todo').addEventListener('click',function (e) {
    console.log('Hello there')
})

document.querySelector('#new-todo').addEventListener('input', function (e) {
    console.log(e.target.value)
})
// Print out - You have 2 todos left (p element)
const incompleteTodos = todo.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

// Add a p for each todo above (use text value)
todo.forEach(function(array) {
    const tasksNotDone = document.createElement('p')
    tasksNotDone.textContent = array.text
    document.querySelector('body').appendChild(tasksNotDone)
})

/*
const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
 
    if (p.textContent.includes('the')) {
        p.remove()  
    } 
}) 

 */
