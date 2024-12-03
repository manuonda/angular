import { isPlatformBrowser } from '@angular/common';
import { booleanAttribute, Component, inject, input, output, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-hydrate',
  imports: [],
  templateUrl: './hydrate.component.html',
  styleUrl: './hydrate.component.scss'
})
export class HydrateComponent {

  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  name =input.required<string>({
    alias:'title',
    transform: toCapitalize,
  })
  isAdmin = input<boolean, boolean>(false,{
    transform: booleanAttribute
  });

  messageEvent = output<string>();

  sendMessage(){
    this.messageEvent.emit('Hello from child');
  }
  constructor(){
    if( this.isBrowser) {
      localStorage.setItem("key","test")
    }
   }


}
