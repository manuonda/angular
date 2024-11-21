import { Component, ElementRef, forwardRef, Input, input, output, signal, viewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { sign } from 'crypto';

const VALUE_ACCESOR = {
    provide : NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputAgeComponent),
    multi:true
}


const NG_VALIDATOR = {
    provide : NG_VALIDATORS,
    useExisting: forwardRef(() => InputAgeComponent),
    multi:true
}


@Component({
    standalone:true,
    selector: 'input-age',
    template:`
     <input 
      type="text"
      placeholder="Tu edad" 
      (input)="_onInput($event)"
      [disabled]="disabled()"
      (blur)="_onBlur()"
      [value]="value()"
      #input
     />
    `,
    providers:[VALUE_ACCESOR, NG_VALIDATOR]
})

export class InputAgeComponent  implements ControlValueAccessor, Validator{
    
    private _maxLength: number | null = null;
    
    @Input() set maxLength(value: number | null) {
        this._maxLength = value;
        //trigger

        this._onvalidatorChange();
    }

    get maxLength(): number | null {
        return this._maxLength;
    }

    disabled = signal<boolean>(false);
    //maxLength = input<number>(0);

    value= signal<string>('');

    changeValue = output<string>();
    inputElement  = viewChild.required<ElementRef<HTMLInputElement>>('input')
    // variables par utiliar en funciones 
    // registrado
    onChange : (value: string) =>  void =() => {};
    onTouched: () =>  void = () => {};

    _onInput(event:Event){
        const target = event.target as HTMLInputElement;
        let value = target.value;
        //console.log("")
        //this.changeValue.emit(value);
        this.onChange(value);
    }

    _onBlur(){
        this.onTouched();
    }
    constructor() { }
   
    

    writeValue(age: any): void {
        console.log("write value obj : ", age);
        this.value.set(age);
        this.inputElement().nativeElement.value = age;

        // throw new Error('Method not implemented.');
    }


    registerOnChange(fn: any): void {
        // throw new Error('Method not implemented.');
       this.onChange = fn;
    }

    // si el componente ha sido tocado
    registerOnTouched(fn: any): void {
        // throw new Error('Method not implemented.');
        this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        this.disabled.set(isDisabled);
    }


    private _onvalidatorChange = () => {};

    ///interfaces validator 
    validate(control: AbstractControl): ValidationErrors | null {
        console.log("control",control);
        const value = control.value;
        if (!this.isValid(value)) {
          return {invalidAge: 'Age must contain only digits.'}
        }

        if(this.maxLength !== null && value.length > this.maxLength){
            return {maxLengthExceeded: `Age must be less than ${this.maxLength} characters.`}
        }
        return null;
    }
    registerOnValidatorChange?(fn: () => void): void {
        this._onvalidatorChange = fn;
        
    }

    private isValid(value: string): boolean {
        const regex = /^\d+$/;
        return regex.test(value);
      }

}