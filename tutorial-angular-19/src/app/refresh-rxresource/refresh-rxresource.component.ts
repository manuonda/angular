import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VehicleService } from './vehicule.service';

@Component({
   selector: 'app-vehicle-selection',
   imports: [FormsModule],
   template: `
      <div class="content">
         <div class="title">{{pageTitle}}</div>
         @if (isLoading()) {
            <div>... loading vehicles</div>
         } @else if (errorMessage()){
            <div style='color: red'>{{ errorMessage() }}</div>
         } @else {
             dataIsTtale  {{ dataIsStale()}}
            @if (dataIsStale()) {
               <div style='color: red'>The prices may have changed, please refresh</div>
            }
            <div class='grid'>
               <div class='colHeader'>Vehicle</div>
               <div class='colHeader'>Price</div>
               <button class='colButton' (click)='refreshData()'>Refresh</button>

               @for(v of vehicles(); track v) {
                  <div class='col1'>{{ v.name}}</div>
                  <div class='col2'>{{ v.cost_in_credits }}</div>
               } @empty {
                  @if(!isLoading()) {
                     <div>No vehicles found</div>
                  }
               }
            </div>
         }
      </div>
  `,
   styleUrl: './refresh-rxresource.component.scss'
})
export class VehicleSelectionComponent {
   pageTitle = 'Star Wars Vehicle Sales';

   // Injected services
   private vehicleService = inject(VehicleService);

   // Signals to support the template
   vehicles = this.vehicleService.vehicles;
   isLoading = this.vehicleService.isLoading;
   errorMessage = this.vehicleService.errorMessage;
   dataIsStale = this.vehicleService.dataIsStale;

   // On user request, refresh the data
   refreshData() {
      this.vehicleService.reloadData();
   }
}
