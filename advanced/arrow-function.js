const square = (num) => num * num

console.log(square(3))

const people = [{
    name: 'Andrew',
    age: 27
}, {
    name: 'Ava',
    age: 22
}, {
    name: 'Gloria',
    age: 33
}]

const under30 = people.filter(person => person.age < 30)

const person = people.find(person => person.age === 22)