import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


interface Form


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styles: ``
})
export default class SignUpComponent {

  private _formBuilder = inject(FormBuilder)


}
