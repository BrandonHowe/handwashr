import {Component} from '@angular/core';
import {Plugins} from '@capacitor/core';

const {Storage} = Plugins;

@Component({
    selector: 'app-complete',
    templateUrl: 'complete.page.html',
    styleUrls: ['complete.page.scss'],
})
export class CompletePage {
    washArr: Array<number>;
    midnight: number;
    todayWashes: number;
    constructor() {
        this.midnight = new Date().setUTCHours(0, 0, 0, 0);
        this.findTodayWashes();
    }
    async initWashCount() {
        this.washArr = JSON.parse((await Storage.get({key: 'washCount'})).value);
    }
    async findTodayWashes() {
        this.todayWashes = JSON.parse((await Storage.get({key: 'washCount'})).value).filter(l => l > this.midnight).length;
    }
}
