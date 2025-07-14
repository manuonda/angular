import { ApplicationForm } from './interfaces/application-form.directive';
import { FormsModule, NgForm } from '@angular/forms';
import { TemplateFormDirective } from './directives/template-form.directive';
import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'cs-template-form',
  imports: [FormsModule , JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {

  applicationForm:ApplicationForm = {
    name: {
      first:'',
      last:''
    },
    email: '',
    employmentStatus: '',
    positionSelected: '',
    resumeLink: ''

  }
  handleSbumit(form: NgForm){
    console.log("formulario : ",form);
  }
}
