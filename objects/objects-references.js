let myAccount = {
    name: 'Pontus Svensson',
    expenses: 0,
    income: 0,
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

// reset account function
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

// get account summery (account name, balance, income, expenses)
let accountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses`
}

// addIncome
addIncome(myAccount, 10)

// add Expense
addExpense(myAccount, 5)

// add Expense
addExpense(myAccount, 2)

// getAccountSummery
let result = accountSummary(myAccount)
console.log(result)
// reset Account
resetAccount(myAccount)

// getAccountSummery
let lastResult = accountSummary(myAccount)
console.log(lastResult)