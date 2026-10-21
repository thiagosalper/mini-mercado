import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { ProductsService } from "../repository/products.service";
import { EMPTY, of } from "rxjs";
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { addProductActions, loadProductAction, onErrorFetchProducts } from "./product.actions";

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions)
  private productsService = inject(ProductsService)

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProductAction),
      exhaustMap(() =>
      this.productsService.getAll().pipe(
        map((products) => addProductActions({products})),
        catchError(() => of(onErrorFetchProducts()))
      ))
    )
  })
}