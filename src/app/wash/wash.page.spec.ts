import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WashPage } from './wash.page';

describe('WashPage', () => {
    let component: WashPage;
    let fixture: ComponentFixture<WashPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ WashPage ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(WashPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
