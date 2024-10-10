import { AfterViewInit, Component, input, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


const MATERIAL_MODULES=[MatTableModule, MatPaginatorModule ];

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: MATERIAL_MODULES,
  templateUrl: './grid.component.html',
  styles: ``
})
export class GridComponent implements AfterViewInit{
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns = input.required<string[]>();
  data = input.required<[]>();

  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

