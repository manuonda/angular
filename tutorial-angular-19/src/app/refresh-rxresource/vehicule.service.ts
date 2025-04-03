import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, ResourceStatus, computed, inject, linkedSignal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop'
import { delay, map } from 'rxjs';
import { setErrorMessage } from './error-message';

@Injectable({
   providedIn: 'root'
})
export class VehicleService {
   private vehicleUrl = 'https://swapi.py4e.com/api/vehicles';

   // Injected services
   private http = inject(HttpClient);

   // Delayed added to better see the loading message
   // Remove before moving to production
   private vehiclesResource = rxResource({
      loader: () => this.http.get<VehicleResponse>(this.vehicleUrl).pipe(
         map(vr => vr.results),
         delay(500)
      )
   });
   vehicles = computed(() => this.vehiclesResource.value() ?? [] as Vehicle[]);
   error = computed(() => this.vehiclesResource.error() as HttpErrorResponse);
   errorMessage = computed(() => setErrorMessage(this.error(), 'Vehicle'));
   isLoading = this.vehiclesResource.isLoading;

   // Display a message if the data is stale
   private timerId = 0 as any;
   dataIsStale = linkedSignal({
      source: this.vehiclesResource.status,
      computation: (status) => {
         // Clear any existing timer
         console.log("timerId : ", this.timerId);
         if (this.timerId > 0) {
            clearTimeout(this.timerId);
         }
         if (status === ResourceStatus.Resolved) {
             console.log("source status : ", this.vehiclesResource.status());
            // Shorter time for easy testing
            // Should be a larger number in production
            this.timerId = setTimeout(() => {
               this.dataIsStale.set(true);
               this.timerId = 0;
            }, 5000);
            console.log("this.timerId 2 : ", this.timerId);
         }
         return false;
      }
   });

   reloadData() {
      this.vehiclesResource.reload();
   }
}

export interface VehicleResponse {
   count: number;
   next: string;
   previous: string;
   results: Vehicle[]
}

export interface Vehicle {
   name: string;
   cost_in_credits: number;
}
