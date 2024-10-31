import { JsonPipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component ,inject,input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Character } from '@app/models';
import { GlobalStore } from '@app/store';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CardModule, NgOptimizedImage ,JsonPipe, RouterLink],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent {
  character = input.required<Character>();
  store = inject(GlobalStore);

  removeCharacter(id:number){
    this.store.removeCharacter(id);
  }
}
