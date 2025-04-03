import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatch = (firstControl : string, secondControl: string): ValidatorFn => {
   return (formGroup: AbstractControl): ValidationErrors | null  => {
    const passworControl =  formGroup.get(firstControl);
    const confirmPasswordControl = formGroup.get(secondControl);
    return passworControl?.value === confirmPasswordControl?.value ? null :
      { passwordNotMatch : true}
   }
}
