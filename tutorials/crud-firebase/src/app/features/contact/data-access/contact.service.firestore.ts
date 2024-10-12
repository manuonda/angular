import { inject, Injectable } from '@angular/core';
import { addDoc, collection, DocumentData, DocumentReference, Firestore } from '@angular/fire/firestore';
import { APP_CONTANTS } from '@shared/constants';
import { Contact } from '../contact.interface';

@Injectable({
    providedIn: 'root'
})
export class ContactServiceFirestore {
  private readonly _firestore = inject(Firestore)
  private readonly _contactCollection = collection(this._firestore, APP_CONTANTS.COLLECTION_NAME);

  newContact(contact: Partial<Contact>):Promise<DocumentReference<DocumentData,DocumentData>>{
    return addDoc(this._contactCollection,{
      created: Date.now(),
      updated: Date.now(),
      ...contact
    })
  }

  getAllContacts(){
    
  }
}