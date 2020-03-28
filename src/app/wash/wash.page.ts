import {Component} from '@angular/core';
import {Plugins} from '@capacitor/core';
import { Router } from '@angular/router';

const {Storage} = Plugins;

@Component({
    selector: 'app-wash',
    templateUrl: 'wash.page.html',
    styleUrls: ['wash.page.scss'],
})
export class WashPage {
    currentWash: string;
    currentWashDesc: string;
    currentProgress = 0;
    currentInt: any;
    complete = false;

    constructor(private router: Router) {
        this.currentWash = '3';
        this.currentWashDesc = 'Get ready!';
    }

    innerHeight() {
        return window.innerHeight;
    }

    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    restartInt(delay) {
        clearInterval(this.currentInt);
        this.currentInt = setInterval(() => {
            this.currentProgress += 0.01;
        }, delay);
    }

    updateWash(one: string, two: string) {
        this.currentWash = one;
        this.currentWashDesc = two;
    }

    async addWashCount() {
        const currCount = (await Storage.get({key: 'washCount'})).value !== null
            ? JSON.parse((await Storage.get({key: 'washCount'})).value)
            : [];
        await Storage.set({
            key: 'washCount',
            value: JSON.stringify([...currCount, Date.now()])
        });
    }

    async countdown() {
        this.updateWash('3', 'Get ready!');
        this.currentInt = setInterval(() => {
            this.currentProgress += 0.01;
        }, 30);
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.updateWash('2', 'Turn on the faucet!');
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.updateWash('1', 'Last second!');
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.updateWash('Wet👏', 'Wet your hands under the water, no soap yet');
        this.currentProgress = 0;
        this.restartInt(66);
        await new Promise(resolve => setTimeout(resolve, 5000));
        this.updateWash('Lather🧼', 'Lather your hands in soap, make sure to cover everything');
        this.currentProgress = 0;
        this.restartInt(66);
        await new Promise(resolve => setTimeout(resolve, 5000));
        this.updateWash('Scrub🤝', 'Scrub your hands together. Make sure to get under your nails');
        this.currentProgress = 0;
        this.restartInt(200);
        await new Promise(resolve => setTimeout(resolve, 5000));
        this.updateWash('Rinse💦', 'Rinse off all the soap from your hands');
        this.currentProgress = 0;
        this.restartInt(67);
        await new Promise(resolve => setTimeout(resolve, 5000));
        this.updateWash('Dry💨', 'You\'re all done! Dry your hands now');
        this.addWashCount();
        this.complete = true;
        this.currentProgress = 0;
        this.restartInt(50);
        await new Promise(resolve => setTimeout(resolve, 5000));
        this.router.navigate(['/complete']);
    }

    async ionViewWillEnter() {
        await new Promise(resolve => setTimeout(resolve, 500));
        this.countdown();
    }
}
