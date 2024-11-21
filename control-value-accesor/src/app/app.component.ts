import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputAgeComponent } from './input-age.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, JsonPipe , InputAgeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'control-value-accesor';
  private _formBuilder = inject(FormBuilder);
  max = 5;

  form = this._formBuilder.group({
    name : this._formBuilder.control(''),
    age : this._formBuilder.control('30')
  });

  get ageControl(){
    return this.form.get('age');
  }


  save() {
    console.log(this.form.value);
  }

  change(value: string) {  
    console.log("value : ", value);
  }
  changeLength() {
    this.max = 10;
  }

  constructor() { 
    //this.ageControl?.disable();
  }
  
}
