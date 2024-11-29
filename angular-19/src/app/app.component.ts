import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HydrateComponent } from './hydrate/hydrate.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HydrateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-19';
}
