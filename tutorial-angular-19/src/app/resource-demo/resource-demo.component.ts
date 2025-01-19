import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, resource, signal } from '@angular/core';

@Component({
  selector: 'app-resource-demo',
  imports: [JsonPipe],
  templateUrl: './resource-demo.component.html',
  styleUrl: './resource-demo.component.scss'
})
export class ResourceDemoComponent {
    // isLoading = signal(false);
    // error = signal(false);
   // value = signal<null > (null);

    webSelected = signal<string>('ditto');
    abortSignal = new AbortController();
    http = inject(HttpClient)

    exchange = resource<any, { id: string}>({
       request: () => ({ id: this.webSelected()}),
       loader :({ request }) =>  this.fetchPrice(request.id , this.abortSignal.signal)
    })


    cancel(){
      this.abortSignal.abort();
    }

    constructor(){
      // this.fecthData();
    }

    //  async fecthData() {
    //      try{
    //        this.isLoading.set(true);
    //        const response = await this.fetchPrice();
    //        this.value.set(response);
    //      }catch(error){
    //        this.error.set(true);
    //      }finally{
    //         this.isLoading.set(false);
    //      }
    //  }
     fetchPrice = async (pokemon?: String, abortSignal?: AbortSignal) => {

      try{
         const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon,{
          signal: abortSignal
         });
         if (!response.ok){
           throw new Error('Network response was not ok');
         }
         const data = await response.json();
         return data;
      }catch(error: any){
        throw new Error(error.message);
      }
    }


  }


