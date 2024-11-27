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
        
    })

});