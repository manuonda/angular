import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { hasEmailError, isRequired } from '../../utils/validador';


interface FormSignUp {
  email: FormControl<string | null>,
  password: FormControl<string | null>
}


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styles: ``
})
export default class SignUpComponent {

  private _formBuilder = inject(FormBuilder)
  form = this._formBuilder.group<FormSignUp>({
    email: this._formBuilder.control('', [
      Validators.required,
      Validators.email]),
    password: this._formBuilder.control('', Validators.required)
  });


  isRequired(field: 'email' | 'password') { return isRequired(field, this.form); }

  isEmailRequired() { return hasEmailError(this.form); }

  submit() {
    if (this.form.invalid) return;

    const { email, password } = this.form.value;
    if (!email || !password) return;

  }
}
