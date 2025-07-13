import { RouterLink } from '@angular/router';
import { Component, signal, HostListener } from '@angular/core';
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
export class NavbarComponent {
  toggleNavbarMobile = signal<boolean>(false);

  constructor() {
  }


}
