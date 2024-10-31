import { ChangeDetectionStrategy, Component, computed, inject, input, Signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'

import { emptyCharacter } from '@app/models';
import { GlobalStore } from '@app/store';
import {CustomInputComponent} from '@app/components'
import { RouterLink } from '@angular/router';


interface CharacterForm{
   name : FormControl<string>;
   image: FormControl<string>;
}


@Component({
  selector: 'app-character-add-edit',
  standalone: true,
  imports: [ReactiveFormsModule ,CustomInputComponent],
  templateUrl: './character-add-edit.component.html',
  styleUrl: './character-add-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterAddEditComponent {
  //directamente obtengo este seria el id como 
  //parametro
  id = input<number>();
  readonly store = inject(GlobalStore)
  
  characterToEdit = computed( () => 
      this.store.getCharacter(Number(this.id())) ?? emptyCharacter
  );
  characterForm: Signal<FormGroup> = computed (
   () => new FormGroup<CharacterForm>({
     name: new FormControl(this.characterToEdit().name ,{
      nonNullable: true,
      validators:[Validators.required]
     }),
     image: new FormControl(this.characterToEdit().image,{
      nonNullable: true,
      validators: [Validators.required]
     })
   })
  );


  onSubmit():void{
    if (this.characterForm().valid){
      const character = {
        ...(this.id() ? { id: Number(this.id())}: {}),
        ...this.characterForm().value
      }
    
      const methodToUse = this.id()? "updateCharacter":"addCharacter";

      this.store[methodToUse](character);
      this.characterForm().reset();  
    
    }

  }

}
