import { computed } from '@angular/core';
import { signalStore, withState, withComputed ,withMethods, patchState } from '@ngrx/signals';


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
    }

  }))
);