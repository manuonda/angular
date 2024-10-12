import { Component } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { ColumnKey, Contact } from '../contact.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GridComponent],
  templateUrl:'./list.component.html',
  styles: ``
})
export class ListComponent {
   displayedColumns: ColumnKey<Contact> = ['id','name','phone','email','action']
   data!:Contact[];
   sortableColumns:ColumnKey<Contact> = ['id','name','phone','email']
}


