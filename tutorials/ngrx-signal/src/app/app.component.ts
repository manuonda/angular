import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Filter, Task, TaskStore } from './app.component.store';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers:[TaskStore],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-signal';
  store = inject(TaskStore)
  
  tasks = signal<Task[]>([
    { id: 1, title:"Title1", completed: false},
    { id: 2, title:"Title2", completed: true},
    { id: 3, title:"Title3", completed: false}
  ])
  filter = signal<Filter>('all');

  visibleTasks = computed(() => {
     const tasks = this.tasks();
     const filter = this.filter();
     if( filter === 'all'){
        return tasks.filter((task)=> !task.completed);
     }
    if (filter === 'done'){
      return tasks.filter((task) => task.completed );
     }

     return this.tasks();
  });

  changeFilter(filter:Filter){
    this.filter.set(filter);
  }

}
