import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { toast } from 'ngx-sonner';
import { AuthService, User } from '../../data-access/auth.service';
import { isRequired, hasEmailError } from '../../utils/validador';
import { Router, RouterLink } from '@angular/router';
import { GoogleButtonComponent } from '../../ui/google-button/google-button.component';
import { BehaviorSubject } from 'rxjs';


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
  public _responseError = signal<string>("");
  public information ="datos"

  observableCount = new BehaviorSubject(0);
  signalCount = signal<number>(0);
  count = 0;

  cdr = inject(ChangeDetectorRef);


  form = this._formBuilder.group<FormSignIn>({
    username: this._formBuilder.control('', [Validators.required]),
    password: this._formBuilder.control('', Validators.required),
   });


  isRequired(field: 'username' | 'password' |'email' ) { return isRequired(field, this.form); }

  isEmailRequired() { return hasEmailError(this.form); }

  async submit() {
    this.information ="que onda";
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
        //this._responseError = err?.error.detail;
        this._responseError.set(err?.error.detail);
        toast.error('Se produjo un error de login');
        //console.error(`Error : `,JSON.stringify(err));
        this._responseError = err?.error.detail;
      },
    }); 

    this.cdr.markForCheck();
  }

  increment() {
    this.count++;
  }
  incrementSignal() {
    this.signalCount.set(this.signalCount() + 1);
    console.log("signalCount", this.signalCount());
  }
  incrementObservable() {
    this.observableCount.next(this.observableCount.value + 1);
  }

  detectChanges() {
    console.log(" ROOT_COMPONENT detected changes", new Date().getSeconds());
  }
}
