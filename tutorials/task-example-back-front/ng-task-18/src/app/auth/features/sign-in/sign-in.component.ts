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

interface ResponseError{
  title:string,
  status: string,
  detail: string
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
  public _existError:boolean = false; 
  public _responseError:ResponseError | null = null;


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
    this._authService.signIn(userData).subscribe({
      next:(resp) => {
         this._router.navigateByUrl('dashboard');
      },
      error:(err: any) => {
        this._existError = true;
        this._responseError = err?.error;
        toast.error('Se produjo un error de login');
        console.error(`Error : `,JSON.stringify(err));
      },
    });
    // try {
    //   const resp = await this._authService.signIn(userData);   
    //   const json = await resp;
    //   this._router.navigate(['/tasks']);
    //   console.log("resp : ", json);
  
    // } catch (error) {
    //   console.error(`Error ${error}`);
    //   toast.error("Error : " + error);
    // }   
    
  }
}
