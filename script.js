let money, time;

function start() {
    money = +prompt("Your budget for a month:", "");
    time = prompt("Enter the date in the format YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Your budget for a month:", "");
    }
}
start();
let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 1; i++) {
        let a = prompt("Enter a mandatory expense article this month ", ""),
            b = prompt("How much will it cost ? ", "");
        if (
            typeof a === "string" &&
            typeof a != null &&
            typeof b != null &&
            a != "" &&
            b != "" &&
            a.length < 50
        ) {
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}
chooseExpenses();
/*let i = 0;
while(i<2){
	 let a = prompt("Enter a mandatory expense article this month", ''),
			b = prompt("How much will it cost ?", '');
			if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
					appData.expenses[a] = b;}
					else{
					console.log = ("Bad result");
					i--;
					}
i++;
};

do {
	let a = prompt("Enter a mandatory expense article this month", ''),
		b = prompt("How much will it cost ?", '');
	if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
		appData.expenses[a] = b;
	} else {
		console.log = ("Bad result");
		i--;
	}
	i++;
}
while (i < 2);
*/

appData.moneyPerDay = (appData.budget / 30).toFixed(2);
alert("Budget for 1 day is " + appData.moneyPerDay + "uan");

if (appData.moneyPerDay < 100) {
    console.log("This is the minimum income level!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("This is the average income level!");
} else if (appData.moneyPerDay > 2000) {
    console.log("This is a high income!");
} else {
    console.log("Error");
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("What amount of money on the deposit?"),
            percent = +prompt("what percentage ?");

        appData.monthIncome = (save / 100 / 12) * percent;
        alert("your monthly deposit income is" + appData.monthIncome);
    }
}
checkSavings();