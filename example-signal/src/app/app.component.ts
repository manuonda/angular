import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'example-signal';
  readonly _stateService = inject(StateService)
  
}
