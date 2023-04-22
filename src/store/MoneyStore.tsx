import { makeAutoObservable } from "mobx";

class MoneyStore {
    
    income = [200,300,500];
    expenses = [400];

    constructor() {
        makeAutoObservable(this);
    }

}
export default new MoneyStore();