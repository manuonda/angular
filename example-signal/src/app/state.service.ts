import { computed, Injectable, signal } from '@angular/core';

interface AppState{
    counter:number;
    user:{
        name: string;
        isAuthenticated: boolean;
    }
}


@Injectable({providedIn: 'root'})
export class  StateService{
     _state = signal<AppState>({
        counter:0,
        user:{
            name:'',
            isAuthenticated:false
        }
    });

    constructor() {

    }
    
    readonly counter = computed(() => this._state().counter);
    readonly user =computed(() => this._state().user);
    readonly isAuthenticated = computed(() => this._state().user.isAuthenticated);

    
    setUser(name: string) :void {
        this._state.update(state => ({
         ...state,
         user:{
             ...state.user,
             name,
             isAuthenticated: true
         }
        }));
    }

    logout() :void {
        this._state.update(state => ({
         ...state,
         user:{
             ...state.user,
             name:'',
             isAuthenticated: false
         }
        }));
    }

    incrementCounter():void{
        console.log("increent counter")
        this._state.update((state) => ({
            ...state,
            counter: state.counter + 1
        }));
    }
}