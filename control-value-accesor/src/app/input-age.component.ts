import { Component, input, output } from '@angular/core';

@Component({
    standalone:true,
    selector: 'input-age',
    template:`
     <input 
      type="text"
      placeholder="Tu edad" 
      (input)="_onInput($event)"
      [disabled]="disabled()"
      [value]="value()"
      #input
     />
    `
})

export class InputAgeComponent  {
    disabled = input<boolean>(false);

    value= input<string>('');

    changeValue = output<string>();

    _onInput(event:Event){
        const target = event.target as HTMLInputElement;
        let value = target.value;

        this.changeValue.emit(value);
    }
    constructor() { }

}