import { makeAutoObservable } from "mobx";

class MoneyStore {

    categories = [
        {
            value: 'пивасик',
            id: 1
        },
        {
            value: 'рыбка',
            id: 2
        },
        {
            value: 'картошенька',
            id: 3
        }
    ]
    
    income = [
        {
            summ: 200,
            year: 2023,
            month: 1
        },
        {
            summ: 300,
            year: 2023,
            month: 2
        },
        {
            summ: 500,
            year: 2023,
            month: 3
        },
    ];

    expenses = [
        {
            summ: 100,
            year: 2023,
            category: 'пивасик',
            month: 3
        },
        {
            summ: 300,
            year: 2023,
            category: 'рыбка',
            month: 3
        }
    ];

    constructor() {
        makeAutoObservable(this);
    }

    getTotalIncome(): number {
        let sum = 0;
        // потому что for быстрее всего =)
        for (let i = 0; i < this.income.length; i++) {
            sum+= this.income[i].summ
        }
        return sum;
    }

    getTotalExpense(): number {
        let sum = 0;
        // потому что for быстрее всего =)
        for (let i = 0; i < this.expenses.length; i++) {
            sum+= this.expenses[i].summ
        }
        return sum;
    }

    addMoney(sum: number) {
        const date = new Date();
        const newIncome = {
            summ: sum,
            year: date.getFullYear(),
            month: date.getMonth()
        }
        this.income.push(newIncome)
    }

    catchMoney(summ:number, category:string) {
        const date = new Date();
        const newCatch = {
            summ,
            year: date.getFullYear(),
            category,
            month: date.getMonth()
        }
        this.expenses.push(newCatch);
    }

}
export default new MoneyStore();