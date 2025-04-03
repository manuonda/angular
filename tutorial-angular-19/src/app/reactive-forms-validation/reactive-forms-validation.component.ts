import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatch } from './custom-validators/password-match.validator';

@Component({
  selector: 'app-reactive-forms-validation',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms-validation.component.html',
  styleUrl: './reactive-forms-validation.component.scss'
})
export class ReactiveFormsValidationComponent {

    fb = inject(FormBuilder);

    form = this.fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword : ['', [Validators.required, Validators.minLength(6)]]
   } ,{
       validators: [
         passwordMatch('password','confirmPassword')
       ]
   });

   handleSubmit(){
      console.log(this.form);
      console.log(this.form.errors);
   }
}
