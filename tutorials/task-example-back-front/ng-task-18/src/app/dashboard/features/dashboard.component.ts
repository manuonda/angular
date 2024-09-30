import { Component, inject } from '@angular/core';
import DashboardService from '../data-access/dashboard.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class DashboardComponent {
   private _dashboardService = inject(DashboardService);
   users = toSignal(this._dashboardService.getAll());
}
