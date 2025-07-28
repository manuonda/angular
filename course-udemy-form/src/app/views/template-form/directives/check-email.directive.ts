import { GetEmailService } from './../../../services/get-email.service';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
 import { Directive, inject } from '@angular/core';
import { Observable, of, tap , map } from 'rxjs';

 @Directive({
  selector: '[checkEmail]',
  providers:[{
        provide:NG_ASYNC_VALIDATORS,
        useExisting: CheckEmailAsyncValidator,
        multi:true
  }]

})
export class CheckEmailAsyncValidator implements AsyncValidator {

  private _getEmailService = inject(GetEmailService);

   validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
       return this._getEmailService.getEmails().pipe(
         map((emails:string[]) => {
            const foundEmail = emails.find(email => email=== control?.value);
            return !foundEmail ?  null: {
              isAnExistingEmail: true
            }
         })
       );
   }

 }
