import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {Routes} from "@angular/router";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {AuthComponent} from "./components/auth/auth.component";
import {provideHttpClient} from "@angular/common/http";

export const routes:Routes = [
  {path:"",component:AuthComponent,pathMatch:"full"},
];

export const appConfig: ApplicationConfig = {
  providers:
    [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes), provideAnimationsAsync(),
      provideHttpClient(),

    ]
};
