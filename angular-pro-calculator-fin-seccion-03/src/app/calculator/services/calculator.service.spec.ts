import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service"

describe('CalculatorService', () => {

    let service: CalculatorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CalculatorService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should be created with default values', () => {
         expect(service.resultText()).toBe('0');
         expect(service.subResultText()).toBe('0');
         expect(service.lastOperator()).toBe('+');
    });

    it('should set resultTEXT, subResultText to "0" when C is pressed', () => {

      //given
      service.resultText.set('123')
      service.subResultText.set('456');
      service.lastOperator.set('*');

      //when
      service.constructNumber('C');
      
      //then
      expect(service.resultText()).toBe('0');
      expect(service.subResultText()).toBe('0');
      expect(service.lastOperator()).toBe('+');
    });

    it('shoudl update resultText with number input', () => {
      service.constructNumber('1');
      expect(service.resultText()).toBe('1');

      service.constructNumber('2');
      expect(service.resultText()).toBe('12')
    });

    it('should handle operators correctly', ()  => {
       service.constructNumber('1')
       service.constructNumber('-')

       expect(service.lastOperator()).toBe('-')
       expect(service.subResultText()).toBe('1')
       expect(service.resultText()).toBe('0')
    });


    it('should calculated result correctly for addition', () => {
       service.constructNumber('1')
       service.constructNumber('+')
       service.constructNumber('2')
       service.constructNumber('=')

       expect(service.resultText()).toBe('3')
    });

    it('should calculated result correctly for subtraction', () => {
      service.constructNumber('5')
      service.constructNumber('-')
      service.constructNumber('2')
      service.constructNumber('=')

      expect(service.resultText()).toBe('3')
   });

   it('should calculated result correctly for multiplication', () => {
    service.constructNumber('2')
    service.constructNumber('*')
    service.constructNumber('4')
    service.constructNumber('=')

    expect(service.resultText()).toBe('8')
 });

 it('should handle decimal point correctly', () => {
  service.constructNumber('1')
  service.constructNumber('.')
  service.constructNumber('5')

  expect(service.resultText()).toBe('1.5')
  service.constructNumber('.')
  expect(service.resultText()).toBe('1.5')

});

it('should handle decimal point correctly startin with zero', () => {
  service.constructNumber('0')
  service.constructNumber('.')
  service.constructNumber('0')

  expect(service.resultText()).toBe('0.0')
  service.constructNumber('.')
  expect(service.resultText()).toBe('0.0')

});

 it('should handle sing change correctly', () => { 
   service.constructNumber('1')
   service.constructNumber('+/-')

   expect(service.resultText()).toBe('-1')
   service.constructNumber('+/-')
   expect(service.resultText()).toBe('1')
 });

 

})