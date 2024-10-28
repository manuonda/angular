import { ChangeDetectionStrategy, Component ,inject,input } from '@angular/core';
import { Character } from '@app/models';
import { GlobalStore } from '@app/store';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CardModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent {
  character = input.required<Character>();
  store = inject(GlobalStore);
}
