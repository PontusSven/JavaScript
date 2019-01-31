let myAccount = {
    name: 'Pontus Svensson',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
}

let addIncome = function (account, amount) {
    account.income = account.income + amount
    console.log(account)
}

addExpense(myAccount, 2.5)
addIncome(myAccount, 10)
console.log(myAccount)

// test