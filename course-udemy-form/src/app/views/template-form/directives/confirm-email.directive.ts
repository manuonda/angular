import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[confirmEmail]',
  providers: [
    { provide: NG_VALIDATORS,
      useExisting: ConfirmEmailValidator,
      multi: true
    }
  ]
})
export class ConfirmEmailValidator implements Validator {
  constructor() {

   }
  validate(formGroup: AbstractControl): ValidationErrors | null {
    const emailControl = formGroup.get('email');
    const confirmEmailControl = formGroup.get('confirm-email');
    let error: ValidationErrors | null;
    if (emailControl?.value === ""){
       error = {emailsRequired: true}
    } else {
       error = emailControl?.value === confirmEmailControl?.value ?
         null :
         { noMatch: true };
    }
    confirmEmailControl?.setErrors(error);

    return error;
  }

}
