import { computed } from '@angular/core';
import { signalStore, withState, withComputed ,withMethods, patchState } from '@ngrx/signals';
import { compileFunction } from 'vm';


export interface Task{
    id: number,
    title: string,
    completed: boolean
  }
  
 export type Filter = 'all' | 'pending' | 'done';

  
type TaskState = {
  tasks: Task[];
  isLoading: boolean;
  filter:Filter;
};

const initialState: TaskState = {
  tasks: [],
  isLoading: false,
  filter: 'all'
};

export const TaskStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withComputed((state:any) => ({
    visibleTasks : computed(() => {
      const tasks = state.tasks();
      const filter = state.filter();
      if( filter === 'all'){
         return tasks.filter((task:Task)=> !task.completed);
      }
     if (filter === 'done'){
       return tasks.filter((task:Task) => task.completed );
      }
 
      return tasks;
    })
  })),
  withMethods((store:any) => ({
    changeFilter: (newFilter:Filter) => {
       const currentTasks = store.visibleTasks();
       patchState(store,{
        filter: newFilter
       })
    },
    loadTasks : () => {
       const tasks = [
        { id :1 , title: 'title1',completed: false },
        { id :2 , title: 'title2',completed: true },
        { id :3 , title: 'title3',completed: false }
       ];
       patchState(store , { tasks })
    }

  }))
);