import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export interface Task{
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-signal';
  tasks = signal<Task[]>([
    { id: 1, title:"Title1", completed: false},
    { id: 2, title:"Title2", completed: true},
    { id: 3, title:"Title3", completed: false}
  ])

  visibleTasks = signal<Task[]>(this.tasks());

  showPendingTasks(){
    const tasks = this.tasks().filter((task) => !task.completed);
    this.visibleTasks.set(tasks);
  }

  showAllTasks(){
    this.visibleTasks.set(this.tasks());
  }

  showDoneTasks(){
    const tasks = this.tasks().filter((task) => task.completed);
    this.visibleTasks.set(tasks);
  }

}
