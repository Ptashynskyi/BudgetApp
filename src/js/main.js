let budgetValue = document.getElementsByClassName("budget-value"),
    dayBudgetValue = document.getElementsByClassName("daybudget-value"),
    levelValue = document.getElementsByClassName("level-value"),
    expensesValue = document.getElementsByClassName("expenses-value"),
    optionalExpensesValue = document.getElementsByClassName(".optionalexpenses-value"),
    incomeValue = document.getElementsByClassName(".income-value"),
    monthSavingsValue = document.getElementsByClassName("monthsavings-value"),
    yearSavingsValue = document.getElementsByClassName("yearsavings-value"),

    yearValue = document.getElementsByClassName("year-value"),
    monthValue = document.getElementsByClassName("month-value"),
    dayValue = document.getElementsByClassName("day-value"),

    expensesItem = document.getElementsByClassName("expenses-item"),

    start = document.getElementById("start"),
    expensesItemBtn = document.getElementsByTagName("button")[0],
    optionalexpensesBtn = document.getElementsByTagName("button" [1]),
    countBudgetBtn = document.getElementsByTagName("button")[2],

    optionalexpensesItem = document.querySelectorAll("optionalexpenses-item"),
    optionalExpenses = document.querySelector(".optionalexpenses"),
    chooseIncome = document.querySelector(".choose-income"),
    savings = document.querySelector("#savings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent");


let money, time;

start.addEventListener('click', function() {
    money = +prompt("Your budget for a month:", "");
    time = prompt("Enter the date in the format YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Your budget for a month:", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();
});
expensesItemBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        if (
            typeof a === "string" &&
            typeof a != null &&
            typeof b != null &&
            a != "" &&
            b != "" &&
            a.length < 50
        ) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalexpensesItem.length; i++) {
        let optEx = optionalexpensesItem[i].value;
        appData.optionalExpenses[i] = optEx;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn('click', function() {

    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "This is the minimum income level!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "This is the average income level!";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "This is a high income!";
        } else {
            levelValue.textContent = "Error";
        }
    } else {
        dayBudgetValue.textContent = "Error";
    }

});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSaving.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = app.monthIncome.toFixed(1);
        yearSavingsValue.textContent = app.yearIncome.toFixed(1);

    }
});

choosePercent.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = app.monthIncome.toFixed(1);
        yearSavingsValue.textContent = app.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
}