const account = {
    name: 'Pontus Svensson',
    expenses: [],
    income: [],
    // addIncome --> description, amount
    AddIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    // addExpense --> description, amount
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    // getAccountSummary - total up all expenses --> Pontus Svensson has $1250 is expenses
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0

        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount
        })
        this.income.forEach(function (income) {
            totalIncome += income.amount
        })

            return `${account.name} has a balance of $${totalIncome - totalExpenses}. $${totalIncome} in income. $${totalExpenses} in expenses`
        
    }
}


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.AddIncome('Job', 1000)
console.log(account.getAccountSummary())

console.log(account)