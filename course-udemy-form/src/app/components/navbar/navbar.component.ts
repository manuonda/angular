import { RouterLink ,Router} from '@angular/router';
import { Component, signal, HostListener , OnInit, OnDestroy, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'nav[cs-navbar]',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0,
        height: 0,
      })),
      state('*', style({
        opacity: 1,
        height: '100vh',
      })),
      transition('void <=> *', animate('.3s')),
      ])
  ]
})
export class NavbarComponent implements OnInit , OnDestroy{
  toggleNavbarMobile = signal<boolean>(false);
  readonly  #router = inject(Router);
  constructor() {
  }
  ngOnInit(): void {
     const routerEvents$= this
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }


}
