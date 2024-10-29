import { inject, InjectionToken } from "@angular/core";
import { Character } from "@app/models"
import { CharacterService } from "@app/services";
import {patchState, signalStore, withHooks, withMethods, withState} from "@ngrx/signals"
import { lastValueFrom } from "rxjs";
import { addEntity, removeEntities, removeEntity, updateEntity, withEntities } from '@ngrx/signals/entities';

type StoreState = {
    characters: Character[];
}

const initialState: StoreState = {
    characters : []
}

const STORE_STATE= new InjectionToken<StoreState>("GlobalStore",{
    factory: () => initialState
});

export const GlobalStore = signalStore(
{ providedIn: "root"},
  withState(() => inject(STORE_STATE)),
  withEntities<Character>(),
  withMethods((store, characterService = inject(CharacterService)) => ({
    getCharacter(id:number){
      return store.characters().find(character => character.id === id)  
    },
    async addCharacter(character: Omit<Character, "id">){
        try {
            await lastValueFrom(characterService.addCharacter(character)) 
            // patchState(store,({characters}) => ({
            //     characters:[...characters,{
            //         id: new Date().getTime(),
            //         ...character
            //     }]
            //   })
            // )
            patchState(store, addEntity({
                id: new Date().getTime(),
                ...character
            }))
        } catch (error) {
            
        }
    },
    async removeCharacter(id:number){
        try {
            await lastValueFrom(characterService.removeCharacter(id))
            patchState(store,({characters}) => ({
                characters: [...characters.filter(char => char.id !== id)]
              })
            )
           //patchState(store, removeEntity(id));
        } catch (error) {
            
        }
    },
    async updateCharacter(updateCharacter: Character){
        try {
            await lastValueFrom(characterService.addCharacter(updateCharacter))
            /*
            patchState(store,({characters}) => ({
                characters: [...characters.map((char) => char.id === updateCharacter.id? { ...char,...updateCharacter}: char)]
              })
            ) */
           patchState(store, updateEntity({ id: updateCharacter.id , changes: {...updateCharacter} }))

        } catch (error) {
            
        }
    }
  })),
  withHooks({
      async onInit(store, characterService = inject(CharacterService)){
        const characters = await lastValueFrom(characterService.getAllCharacteres()); 
        patchState(store, {characters}); 
      } 
  })
)
