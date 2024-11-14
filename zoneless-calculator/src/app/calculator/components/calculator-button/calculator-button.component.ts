import { Attribute, ChangeDetectionStrategy, Component, HostBinding, input, OnInit } from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone: true,
  imports: [],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host:{ 
    class: "w-1/4 border-r border-b border-indigo-400",
    attribute:"hola"
  }
})
export class CalculatorButtonComponent  implements OnInit{

  

  public isCommand = input<boolean>(false);
  public isDoubleSize = input<boolean>(false);

  ngOnInit():void {
    console.log(this.isCommand())
  }

  // @HostBinding('class.is-command') get commandSylte(){
  //   return this._isCommand();
  // }

  @HostBinding('class.w-2/4') get commandStyle(){
    return this.isDoubleSize();
  }
}
