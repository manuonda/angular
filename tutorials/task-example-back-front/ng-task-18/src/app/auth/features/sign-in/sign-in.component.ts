import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { toast } from 'ngx-sonner';
import { AuthService, User } from '../../data-access/auth.service';
import { isRequired, hasEmailError } from '../../utils/validador';
import { Router, RouterLink } from '@angular/router';
import { GoogleButtonComponent } from '../../ui/google-button/google-button.component';


interface FormSignIn {
  username: FormControl<string | null>,
  password: FormControl<string | null>
}

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink , GoogleButtonComponent],
  templateUrl: './sign-in.component.html',
  styles: ``
})
export default class SignInComponent {
  private _formBuilder = inject(FormBuilder)
  private _authService = inject(AuthService);
  private _router = inject(Router);

  form = this._formBuilder.group<FormSignIn>({
    username: this._formBuilder.control('', [Validators.required]),
    password: this._formBuilder.control('', Validators.required),
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
      const resp = await this._authService.signIn(userData);   
      const json = await resp;
      this._router.navigate(['/tasks']);
      console.log("resp : ", json);
  
    } catch (error) {
      console.error(`Error ${error}`);
      toast.error("Error : " + error);
    }   
    
  }
}
