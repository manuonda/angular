import { CheckEmailAsyncValidator } from './directives/check-email.directive';
import { ConfirmEmailValidator } from './directives/confirm-email.directive';
import { ApplicationForm, VerifyAccount } from './interfaces/application-form.directive';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { Component, viewChild , AfterViewInit} from '@angular/core';
import { JsonPipe } from '@angular/common';
import { BannedWordDirective } from './directives/banner-word.directive';

@Component({
  selector: 'cs-template-form',
  imports: [FormsModule , JsonPipe , BannedWordDirective , ConfirmEmailValidator , CheckEmailAsyncValidator],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent implements AfterViewInit{


  verifyAccountWith: VerifyAccount = 'email';

  ngForm = viewChild(NgForm);

  applicationForm:ApplicationForm = {
    name: {
      first:'David',
      last:'Garcia'
    },
    email:{
      email:'manuonda@gmail.com',
      confirmationEmail:'manuonda@gmail.com'
    },
    employmentStatus: 'employee',
    positionSelected: 'Angular Developer',
    resumeLink: 'www.manuonda.com',
    phoneNumber:''

  }

  initialFormValue!: {[key:string]:string}

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   console.log(this.ngForm()?.value);
    // }, 0);

    // queueMicrotask(() => {
    //    console.log(this.ngForm()?.value)
    // })

    Promise.resolve().then(() => {
      console.log(this.ngForm()?.value);
      this.initialFormValue = this.ngForm()?.value;
      console.log(this.initialFormValue);
    })
  }


  handleSubmit(){
    console.log(this.ngForm());
    this.markAllAsDirty(this.ngForm()!.form);
    if(this.ngForm()!.invalid) return;

    // this.ngForm()!.resetForm();
  }

  handlePhoneNumber(){
    this.applicationForm.phoneNumber = "";
  }

  markAllAsDirty(form: FormGroup){
    console.log(form);
    Object.values(form.controls).forEach(control => {
      if ( control instanceof FormGroup){
        this.markAllAsDirty(control);
      }
      control.markAsDirty();

    });
  }

  handleReset(event:Event){
    // this.ngForm()!.resetForm({
    //   name:{
    //     first:'Jhon',
    //   },
    //   'open-positions:': 'Angular Developer'
    // });
    event.preventDefault();
    this.ngForm()!.resetForm(this.initialFormValue);

  }
}
