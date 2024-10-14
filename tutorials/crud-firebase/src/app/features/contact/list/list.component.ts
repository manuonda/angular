import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { ColumnKey, Contact } from '../contact.interface';
import { ContactServiceFirestore } from '../data-access/contact.service.firestore';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

const MATERIAL_MODULES= [MatIconModule, MatDividerModule, MatButtonModule]

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GridComponent, MATERIAL_MODULES],
  templateUrl:'./list.component.html',
  styles: ``
})
export class ListComponent implements OnInit{
  
   displayedColumns: ColumnKey<Contact> = ['id','name','phone','email','action']
   data!:Contact[];
   sortableColumns:ColumnKey<Contact> = ['id','name','phone','email']
   
   private readonly  _contactSvc = inject(ContactServiceFirestore);
   private readonly  _destroyRef = inject(DestroyRef); //buena practica

   ngOnInit(): void {
     this.getAllContacts();
  }
   getAllContacts(){
     this._contactSvc.getAllContacts()
     .pipe(
      takeUntilDestroyed(this._destroyRef),
      tap((contacts: Contact[]) => this.data = [...contacts])
     ).subscribe();
   }
  }


