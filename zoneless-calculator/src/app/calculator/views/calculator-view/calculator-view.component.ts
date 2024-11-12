import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorComponent } from '@app/calculator/components/calculator/calculator.component';

@Component({
  selector: 'app-calculator-view',
  standalone: true,
  imports: [CalculatorComponent],
  templateUrl: './calculator-view.component.html',
  styleUrl: './calculator-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorViewComponent {

}
