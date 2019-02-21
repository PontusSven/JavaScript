// Fetch existing todos from localStorage
const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }

}
    
// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}
// Render application to localStorage
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })  
}
// Remove notes
const removeTodo = function (id) {
    const index = todos.findIndex(function (todo) {
       return todo.id === id
    }) 

    if (index > -1) {
        todos.splice(index, 1)
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {

    // Create all elements
    const container = document.createElement('div')
    const todoText = document.createElement('span')
    const checkbox = document.createElement('input')
    const removeButton = document.createElement('button')

    // Setup todo checkboxes)
    checkbox.setAttribute('type', 'checkbox')
    container.appendChild(checkbox)

     // Setup the todo text
     todoText.textContent = todo.text
     container.appendChild(todoText)

    // Setup remove button
    removeButton.textContent = 'x'
    container.appendChild(removeButton)
    removeButton.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos, filters)
        renderTodos(todos)
    })
    
    return container
}
// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}