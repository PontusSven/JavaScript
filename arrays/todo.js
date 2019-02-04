const todo = ['Clean', 'Train', 'Make dinner', 'Walk the dog', 'Buy groceriess']

// delete the 3rd item
todo.splice(2, 1)

// add a new item onto the end
todo.push('Wash dishes')

// remove the first item from the list
todo.shift()


console.log(`You have ${todo.length} todos`)

todo.forEach(function(item, index) {
    console.log(`${index + 1}. ${item}`) 
})

/*
for (let count = 0; count < todo.length; count++) {
    let num = count + 1
    console.log(`${num}. ${todo[count]}`)
}
*/