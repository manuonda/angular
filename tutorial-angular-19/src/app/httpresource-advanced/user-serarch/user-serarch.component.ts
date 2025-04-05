import { API_URL } from './config';
import { httpResource } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { User } from './user.model';
import {z as zod} from 'zod';
import {toSignal, toObservable} from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs/operators';

const UserSchema =  zod.array(
  zod.object({
    id: zod.number(),
    name: zod.string()
   })
);

@Component({
  selector: 'app-user-serarch',
  imports: [MatProgressBarModule],
  templateUrl: './user-serarch.component.html',
  styleUrl: './user-serarch.component.scss'
})
export class UserSerarchComponent {
    query = signal('');

    disabled = signal(false);

    debouncedQuery = toSignal(
      toObservable(this.query).pipe(debounceTime(300))
    )

    usersRs = httpResource<User[]>(
      () => {
        /**
        * Use this if-block to prevent http calls at certain conditions
        * Learn more about it from the tip below  👇
        * @link https://youtube.com/shorts/fzsQ2jXyAcA
        */
         if(this.disabled()){
            return ;
         }
         return `${API_URL}?name_like=^${this.debouncedQuery()}`;
      }
      ,{
         defaultValue : [],
         parse :UserSchema.parse

     })
    addUser(){
       const user = { id :  123, name :"David garcia"};
       this.usersRs.update((users:any) => users? [user, ...users]: [user]);
    }
}
