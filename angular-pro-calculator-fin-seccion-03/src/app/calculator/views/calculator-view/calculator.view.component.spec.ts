import { ComponentFixture, TestBed } from '@angular/core/testing';
import CalculatorViewComponent from './calculator-view.component';
import { concatMap } from 'rxjs';

describe('CalculatorViewComponent', () => {
    let component: CalculatorViewComponent;
    let compiled : HTMLElement;
    let fixture: ComponentFixture<CalculatorViewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({})
        .compileComponents();

        fixture = TestBed.createComponent(CalculatorViewComponent);
        compiled = fixture.nativeElement;
        component = fixture.componentInstance;
    });

    it('should create the app', () => {
       expect(component).toBeTruthy();
       console.log(compiled)
    });

    it('shoudl contain calculator component', () => {
        expect(compiled.querySelector('calculator')).not.toBeNull();
    })

    it('should contain basic css classes', () => {
        const divElement = compiled.querySelector('div');
        const divClasses = divElement?.classList.value.split(' ');

        const shouldHave = 'w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden'.split(' ');


        shouldHave.forEach(element => {
            expect(divClasses).toContain(element);
        });
    })

});