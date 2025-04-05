import { HttpClient, httpResource } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';


export const API = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"

@Component({
  selector: 'app-http-resource',
  imports: [],
  templateUrl: './http-resource.component.html',
  styleUrl: './http-resource.component.scss'
})
export class HttpResourceComponent {

  private http = inject(HttpClient)


  page = signal(1);

  limit = signal(10);
  offset = signal(10);
  //si quiero que los valores a utilizar sean signal tengo que reliazar de esta forma y depnden de los valores
  //signal de limit y offset
  resourceRef = httpResource<any>(() => `https://pokeapi.co/api/v2/pokemon?limit=${this.limit()}&offset=${this.offset()}`);
  pokemons = computed(() => this.resourceRef.value()?.results || [] );


  //otra forma 
  resourceRefTwo = httpResource<any>( () => ({
    url: "https://pokeapi.co/api/v2/pokemon",
    headers:{'Content-Type': 'application/json'},
    params: { offset : this.offset() , limit : this.limit()}
  }))
  pokemonsTwo = computed(() => this.resourceRefTwo.value()?.results || []);

  change(event: Event){
    const select = event.target as HTMLSelectElement;
    this.offset.set(Number(select.value));
  }
  
}
