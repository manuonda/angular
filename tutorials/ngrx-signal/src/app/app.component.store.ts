import { signalStore, withState } from '@ngrx/signals';


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
  withState(initialState)
);