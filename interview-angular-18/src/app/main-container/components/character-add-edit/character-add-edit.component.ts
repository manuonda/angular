import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'
//
import { GlobalStore } from '@app/store';


interface CharacterForm{
   name : FormControl<string>;
   image: FormControl<string>;
}


@Component({
  selector: 'app-character-add-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './character-add-edit.component.html',
  styleUrl: './character-add-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterAddEditComponent {
  id = input<number>();

  readonly store = inject(GlobalStore)
}
