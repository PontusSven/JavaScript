const account = {
    name: 'Pontus Svensson',
    expenses: [],
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

        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount
        })
            return `${account.name} has $${totalExpenses} in expenses`
        
    }
}

// Expense --> description, amount
// getAccountSummary - total up all expenses --> Pontus Svensson has $1250 is expenses



account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
console.log(account.getAccountSummary())

console.log(account)