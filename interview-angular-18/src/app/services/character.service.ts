import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly baseUrl='https://rickandmortyapi.com/api/character';

  http = inject(HttpClient)
  constructor() { }
}
