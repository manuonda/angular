import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogContent, MatDialogModule} from '@angular/material/dialog'
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ContactServiceFirestore } from '@features/contact/data-access/contact.service.firestore';
import { ModalService } from './modal.service';
import { APP_CONTANTS } from '@shared/constants';
import { MatButtonModule } from '@angular/material/button';


const MATERIAL_MODULES= [
  MatLabel,
  MatFormField,
  MatInput,
  MatDialogContent,
  MatDialogModule,
  MatButtonModule
];

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule, MATERIAL_MODULES],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],  // Cambiado a styleUrls
})
export class ModalComponent implements OnInit{
  contactForm!: FormGroup;
  private readonly _fb = inject(FormBuilder);
  private readonly _matDialog = inject(MAT_DIALOG_DATA); 
  private readonly _contactSvc = inject(ContactServiceFirestore);
  private readonly _modalSvc  = inject(ModalService)

  ngOnInit(): void {
    this._buildForm();
    this.contactForm.patchValue(this._matDialog.data);
   
  }

  async onSubmit(){
    let message = APP_CONTANTS.MESSAGES.CONTACT_UPDATED
    const contact = this.contactForm.value;

    if(this._matDialog.data){
      this._contactSvc.updateContact(this._matDialog.data.id, contact);
    } else {
      await this._contactSvc.newContact(contact);
      message = APP_CONTANTS.MESSAGES.CONTACT_ADDED; 
    }

    console.log(message);
    //show snackbar
    this._modalSvc.closeModal();

  }

  getTitle():string{
    return this._matDialog.data? 'Edit Contact' : 'Add Contact';   
  }

  // private _disabledForm():void{
  //   this.contactForm.disable();
  // }

  private _buildForm(): void{
    this.contactForm = this._fb.nonNullable.group({
       name: ['', Validators.required],
       phone: ['', Validators.required],
       email: ['', Validators.required]
    });
  }
}
