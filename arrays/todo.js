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

// Sort array by completed (true false)
const sortTodos = function (myArray) {
    todo.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed &&  a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todo)
// console.log(todo)

// 1. Switch to array to objects -> text, completed(boolean)
// 2. Create function to remove a todo by text value

// Function to delete a object
const deleteTodo = function (myArray, title) {
    // Function to find a specific string and return the index
    const index = myArray.findIndex(function(myArray, index) {
        return myArray.text.toLowerCase() === title.toLowerCase()
        })
    // If a index is found, remove it
    if(index > -1) {
        myArray.splice(index, 1)
    }
}


const completedTasks = function (todo) {
    return todo.filter(function(note, index) {
        return note.completed
    })
     
}

deleteTodo(todo, 'Clean')
// console.log(todo) 


// delete the 3rd item
todo.splice(2, 1)

// add a new item onto the end
todo.push('Wash dishes')

// remove the first item from the list
todo.shift()


// console.log(`You have ${todo.length} todos`)

todo.forEach(function(item, index) {
  // console.log(`${index + 1}. ${item}`) 
}) 


for (let count = 0; count < todo.length; count++) {
    let num = count + 1
   // console.log(`${num}. ${todo[count]}`)
}
