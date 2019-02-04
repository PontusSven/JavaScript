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

// 1. Switch to array to objects -> text, completed(boolean)
// 2. Create function to remove a todo by text value


const deleteTodo = function (myArray, title) {
    const index = myArray.findIndex(function(myArray, index) {
        return myArray.text.toLowerCase() === title.toLowerCase()
        })
    if(index > -1) {
        myArray.splice(index, 1)
    }
}

deleteTodo(todo, 'Clean')
console.log(todo)


// delete the 3rd item
/* todo.splice(2, 1)

// add a new item onto the end
todo.push('Wash dishes')

// remove the first item from the list
todo.shift()


console.log(`You have ${todo.length} todos`)

todo.forEach(function(item, index) {
    console.log(`${index + 1}. ${item}`) 
}) */

/*
for (let count = 0; count < todo.length; count++) {
    let num = count + 1
    console.log(`${num}. ${todo[count]}`)
}
*/