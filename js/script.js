
let companies = [
    {
        name: 'sheroz_ubba_studio',
        budget: 75000,
        tax: 12,
        expensesPerYear: [5000, 3000, 25000]
    },
    {
        name: 'shavkat_mnogogovority',
        budget: 125000,
        tax: 14,
        expensesPerYear: [10000, 4500, 60000]
    },
    {
        name: 'kamoliddin_posuda',
        budget: 150000,
        tax: 12,
        expensesPerYear: [70000, 2000, 15000]
    },
    {
        name: 'azamat_niche',
        budget: 90000,
        tax: 7,
        expensesPerYear: [21000, 1000, 6000]
    },
    {
        name: 'muhammad',
        budget: 80000,
        tax: 14,
        expensesPerYear: [10000, 500, 1680]
    },
    {
        name: 'firuz_nosbiznes',
        budget: 195000,
        tax: 21,
        expensesPerYear: [7000, 15000, 5000]
    },
    {
        name: 'azim_trans_mchj',
        budget: 200000,
        tax: 12,
        expensesPerYear: [70000, 12000, 5000]
    },
    {
        name: 'malika_beaty_salon',
        budget: 150000,
        tax: 12,
        expensesPerYear: [40000, 5000, 7000]
    },
]

// найти расходы за месяц (включая налог)
// найти расходы за месяц
// найти бьюджет за месяц
// найти соотношение бьюджета и расходов показать

let expensesOne, expensesTwo, expensesThree, expensesFour, expensesBudget;
let expensesAll = 0;

for (let i of companies) {
    document.write(`Название: ${i.name} <br>`);
    document.write(`Бюджет: ${i.budget}$ <br>`);
    for (let a of i.expensesPerYear) {
        expensesOne = Math.round((a / 12) / 100 * i.tax);      //расход с процентом.
        expensesTwo = Math.round(a / 12);                     //расход без процентов общий.
        expensesThree = Math.round(expensesOne + expensesTwo); //общие расходы
        expensesAll += expensesThree;                         //плюс равен ответу третьему с общим чтоб вывести ровный процент
        expensesBudget = i.budget - expensesAll;             //минусуем расходы от бюджета
        expensesFour = (expensesAll * 100 / i.budget).toString().slice(0, 5); //общий расход * на 100 и делим на бюджет , ставим (.toString) чтобы вывести строчный елемент 

        document.write(`Расходы с налогом (мес): ${expensesThree}$ (${a}$) <br>`)
        document.write(`Pасходы без налога: ${expensesTwo}$ (${a}$) <br>`)
    }
    document.write(`Общий расход: ${expensesAll}$ <br>`);
    document.write(`Бюджет после расходов: ${expensesBudget}$ <br>`);
    document.write(`Общее в процентах: -${expensesFour}% <hr>`);
}

console.log('UBBAstudio');
