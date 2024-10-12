import { AfterViewInit, Component, effect, input, OnInit, signal, viewChild } from '@angular/core';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInput} from '@angular/material/input'
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FilterComponent } from './filter/filter.component';


const MATERIAL_MODULES=[MatTableModule, MatPaginatorModule , MatButtonModule, MatIconModule];

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [FilterComponent, MATERIAL_MODULES],
  templateUrl: './grid.component.html',
  styles: ``
})
export class GridComponent<T> implements OnInit{
 
   displayedColumns = input.required<string[]>();
   data = input.required<T[]>();
   dataSource = new MatTableDataSource<T>();
   private readonly _sort = viewChild.required<MatSort>(MatSort);
   private readonly _paginator = viewChild.required<MatPaginator>(MatPaginator);
   valueToFilter = signal('');
   sortableColumns = input<string[]>([]);

   constructor(){
    effect(() => {
        if(this.valueToFilter()){
          this.dataSource.filter = this.valueToFilter().trim().toLowerCase();
        } else {
          this.dataSource.filter= '';
        }
    },{allowSignalWrites : true});
  }

  ngOnInit(): void {
    this.dataSource.data = this.data();
    //this.dataSource.sort = this._sort();
    this.dataSource.paginator  = this._paginator();
  }


  // applyFilter(event: Event){
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
}

