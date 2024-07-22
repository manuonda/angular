import { ChangeDetectionStrategy, Component, OnInit, input , output} from '@angular/core';
import { Character } from '../../../../models/character.model';
import { JsonPipe, NgOptimizedImage } from '@angular/common';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [ NgOptimizedImage, JsonPipe],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent implements OnInit{

  character = input.required<Character>();
  characterInfo = input<Character>();
  loaded =  output<string>();


  ngOnInit(): void {
     this.loaded.emit(this.character().url);
  }

}
