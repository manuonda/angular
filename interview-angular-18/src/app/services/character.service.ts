import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CharacterAdapter } from '@app/adapters/character.adapter';
import { Character, CharacterInfo } from '@app/models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly baseUrl='https://rickandmortyapi.com/api/character';

  http = inject(HttpClient)
  constructor() { }

  getAllCharacteres(): Observable<any[]>{
    return this.http.get<CharacterInfo>(this.baseUrl)
    .pipe(map( info =>  CharacterAdapter(info)));
  }

  addCharacter(character: Omit<Character, "id">) :Observable<Character[]>{
    return this.http.get<CharacterInfo>(this.baseUrl)
    .pipe(map(info => CharacterAdapter(info)));
  }
}
