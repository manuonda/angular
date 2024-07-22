import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Observable, firstValueFrom } from 'rxjs';
import { Character } from '../../models/character.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CharacterCardComponent } from './components';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [AsyncPipe , CharacterCardComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContainerComponent {
  private characterService = inject(CharacterService);
   characters$: Observable<Character[]>  = this.characterService.getCharacters();
   characterInfo: Record<string, Character> = {};

   async makeApiCall(url: string){
     let character =  await firstValueFrom(this.characterService.getCharacterInfo(url));
     this.characterInfo[character.id] = character;
   }
}   
