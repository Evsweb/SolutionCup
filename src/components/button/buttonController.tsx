import { makeAutoObservable } from "mobx";

class ButtonController {

    kek = 5;
    constructor() {
        makeAutoObservable(this);
    }

    keker() {
        console.log('kek');
        this.kek += 1;
        console.log(this.kek);
    }
}

export default new ButtonController();