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

const filters = {
    searchText: ''
}

const renderTodos = function (todo, filters) {
    const filteredtodos = todo.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredtodos.filter(function (todo) {
        return !filteredtodos.completed
    })

    document.querySelector('#todos-filter').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos-filter').appendChild(summary)
    
    filteredtodos.forEach(function (todo) {
        const newTodo = document.createElement('p')
        newTodo.textContent = todo.text
        document.querySelector('#todos-filter').appendChild(newTodo)
    })
}

renderTodos(todo, filters)


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todo, filters)
})

document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    todo.push({
        text: e.target.elements.newTodo.value,
        completed: false
    })
    renderTodos(todo, filters)
    e.target.elements.newTodo.value = ''
}) 
/* document.querySelector('#add-todo').addEventListener('click',function (e) {
    console.log('Hello there')
}) */

/* document.querySelector('#new-todo').addEventListener('input', function (e) {
    console.log(e.target.value)
}) */


/*
const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
 
    if (p.textContent.includes('the')) {
        p.remove()  
    } 
}) 

 */
