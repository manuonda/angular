import { ChangeDetectionStrategy, Component, computed, inject, NgZone, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Filter, Task, TaskStore } from './app.component.store';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  //providers:[TaskStore],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
 
  title = 'ngrx-signal';
  readonly store = inject(TaskStore)
  
  ngOnInit():void{
     this.store.loadTasks();
  }
  

}
