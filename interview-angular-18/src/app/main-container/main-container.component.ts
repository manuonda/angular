import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalStore } from '@app/store';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [CardModule],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContainerComponent {
    readonly store = inject(GlobalStore)
}
