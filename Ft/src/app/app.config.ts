import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from "ngx-toastr";
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideToastr({timeOut: 9000, preventDuplicates: true}), 
    provideRouter(routes),
    provideHttpClient()
  ],
};