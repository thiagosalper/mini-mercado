import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import localePt from '@angular/common/locales/pt'
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import { provideStore } from '@ngrx/store';
import { cartReducer } from './core/store/cart.reducer';
import { provideEffects } from '@ngrx/effects';
import { ProductsEffects } from './core/store/product.effects';
import { productReducer } from './core/store/product.reducer';
import {provideStoreDevtools} from '@ngrx/store-devtools'


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
      products: productReducer,
    }),
    provideEffects(ProductsEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
      // autoPause: true,
      features: {
        pause: false,
        lock: true,
        persist: true,
      },
    }),
  ]
};
