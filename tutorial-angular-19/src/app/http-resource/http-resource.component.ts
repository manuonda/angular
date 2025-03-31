import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-http-resource',
  imports: [],
  templateUrl: './http-resource.component.html',
  styleUrl: './http-resource.component.scss'
})
export class HttpResourceComponent {

  private http = inject(HttpClient)

  page = signal(1);

  resourceRef = httpResource
  
}
