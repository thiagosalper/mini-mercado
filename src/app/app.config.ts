import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import localePt from '@angular/common/locales/pt'
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import { provideStore } from '@ngrx/store';
import { cartReducer } from './core/store/cart.reducer';


registerLocaleData(localePt);


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    provideStore({
      cart: cartReducer,
    })
  ]
};
