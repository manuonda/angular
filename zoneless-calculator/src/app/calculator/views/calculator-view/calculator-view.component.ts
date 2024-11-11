import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-calculator-view',
  standalone: true,
  imports: [],
  templateUrl: './calculator-view.component.html',
  styleUrl: './calculator-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorViewComponent {

}
