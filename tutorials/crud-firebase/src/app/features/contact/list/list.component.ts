import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { ColumnKey, Contact } from '../contact.interface';
import { ContactServiceFirestore } from '../data-access/contact.service.firestore';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ModalService } from '@components/modal/modal.service';
import { ModalComponent } from '@components/modal/modal.component';

import {MercadoPagoConfig, Preference, Payment} from 'mercadopago'
import { environment } from '@envs/environment';

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
   mercadopago = new MercadoPagoConfig({ accessToken: environment.MP_ACCESS_TOKEN});
   
   private readonly  _contactSvc = inject(ContactServiceFirestore);
   private readonly  _destroyRef = inject(DestroyRef); //buena practica
   private readonly  _modalSvc = inject(ModalService);

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

   onClickNewContact():void{
    this._modalSvc.openModal<ModalComponent, Contact>(ModalComponent);  
   }

   async onClickPagoMercadoPago(){
      console.log(this.mercadopago);
      let preference = await this.information();
      console.log(preference);
      console.log(preference.sandbox_init_point!);
   }

   async information(){
    const preference = await new Preference(this.mercadopago).create({
      body: {
        items: [
          {
            id: "donacion",
            title:"prueba pago",
            quantity: 1,
            unit_price: 100,
          },
        ],
      },
    });
    return preference;
   }

  }


