import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { hasEmailError, isRequired } from '../../utils/validador';
import { AuthService, User } from '../../data-access/auth.service';
import { toast } from 'ngx-sonner';



interface FormSignUp {
  username: FormControl<string | null>,
  password: FormControl<string | null>,
  firstname?: FormControl<string | null>,
  lastname?: FormControl<string | null>,
  email: FormControl<string | null>
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
  private _authService = inject(AuthService);

  form = this._formBuilder.group<FormSignUp>({
    username: this._formBuilder.control('', [Validators.required]),
    password: this._formBuilder.control('', Validators.required),
    firstname: this._formBuilder.control(''),
    lastname: this._formBuilder.control(''),
    email: this._formBuilder.control('', [
     Validators.required,
     Validators.email
    ]) 
  });


  isRequired(field: 'username' | 'password' |'email' ) { return isRequired(field, this.form); }

  isEmailRequired() { return hasEmailError(this.form); }

  async submit() {
    console.log(this.form.invalid);
    if (this.form.invalid) return;

    console.log(this.form.value);
    const { username, password } = this.form.value;
    if (!username || !password) return;

    console.log("this passed");
   
    const userData: User = this.form.value as User;
    console.log("userdata : ", userData);
    try {
      const resp = await this._authService.signUp(userData);   
      const json = await resp;
      console.log("resp : ", json);
      toast.success("Usuario registrado correctamente"); 
    } catch (error) {
      console.error(`Error ${error}`);
      toast.error("Error : " + error);
    }   
    
  }
}
