import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes , withComponentInputBinding()), 
     provideClientHydration(),
     //new detection changes 
     provideZoneChangeDetection(),
     provideHttpClient(withFetch())
    ]
};