import { TestBed } from '@angular/core/testing';
import { TopBarComponent } from './top-bar.component';

describe('TopBarComponent', () => {
    let topBarComponent: TopBarComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                TopBarComponent
            ],
        }).compileComponents();
    });

    it('should be true as default', () => {
        const fixture = TestBed.createComponent(TopBarComponent);
        const app = fixture.componentInstance;
        expect(app.isValid).toBeTrue;
    });

    it('return boolean value', () => {
        const fixture = TestBed.createComponent(TopBarComponent);
        const app = fixture.componentInstance;
        expect(app.isValid()).toBeTruthy();
    });

    it('called changeBtnStatus function in clickBtn1()', () => {
        const fixture = TestBed.createComponent(TopBarComponent);
        const app = fixture.componentInstance;
        spyOn(app, 'changeBtnStatus');
        app.clickBtn1();
        expect(app.changeBtnStatus).toHaveBeenCalled();
    });

    it('called changeBtnStatus function in clickBtn2()', () => {
        const fixture = TestBed.createComponent(TopBarComponent);
        const app = fixture.componentInstance;
        spyOn(app, 'changeBtnStatus');
        app.clickBtn2();
        expect(app.changeBtnStatus).toHaveBeenCalled();
    });

    it('change button status', () => {
        const fixture = TestBed.createComponent(TopBarComponent);
        const app = fixture.componentInstance;
        app.changeBtnStatus();
        expect(app.isValid).toBeTruthy();
    });
});