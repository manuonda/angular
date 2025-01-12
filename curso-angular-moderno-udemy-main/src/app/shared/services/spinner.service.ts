import { toObservable } from '@angular/core/rxjs-interop';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpinnerService {
   //private isLoadingSubject = new BehaviorSubject<boolean>(false);
   readonly isLoading = signal<boolean>(false);
  
  //isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();
  
  isLoading$ = toObservable(this.isLoading);
  show(): void {
    this.isLoading.set(true);
    //this.isLoadingSubject.next(true);
  }

  hide(): void {
    this.isLoading.set(false);
    //this.isLoadingSubject.next(false);
  }
}
