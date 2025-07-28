import { CheckEmailAsyncValidator } from './directives/check-email.directive';
import { ConfirmEmailValidator } from './directives/confirm-email.directive';
import { ApplicationForm, VerifyAccount } from './interfaces/application-form.directive';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { TemplateFormDirective } from './directives/template-form.directive';
import { Component, viewChild } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { BannedWordDirective } from './directives/banner-word.directive';

@Component({
  selector: 'cs-template-form',
  imports: [FormsModule , JsonPipe , BannedWordDirective , ConfirmEmailValidator , CheckEmailAsyncValidator],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {

  verifyAccountWith: VerifyAccount = 'email';

  form = viewChild(NgForm);

  applicationForm:ApplicationForm = {
    name: {
      first:'',
      last:''
    },
    email:{
      email:'',
      confirmationEmail:''
    },
    employmentStatus: '',
    positionSelected: '',
    resumeLink: '',
    phoneNumber:''

  }
  // handleSbumit(form: NgForm){
  //   console.log("formulario : ",form);
  // }

  handleSubmit(){
    console.log(this.form()?.form);
    this.markAllAsDirty(this.form()!.form);
  }

  handlePhoneNumber(){
    this.applicationForm.phoneNumber = "";
  }

  markAllAsDirty(form: FormGroup){
    console.log(form);
  }
}
