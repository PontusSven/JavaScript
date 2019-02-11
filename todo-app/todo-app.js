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
    searchText: '',
    hideCompleted: false
}

const renderTodos = function (todo, filters) {
    const filteredTodos = todo.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !filteredTodos.completed
    })

    document.querySelector('#todos-filter').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos-filter').appendChild(summary)
    
    filteredTodos.forEach(function (todo) {
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

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.value
    renderTodos(todo, filters)

})