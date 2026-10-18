import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartItems, selectTotalItems, selectTotalPrice } from '../../core/store/cart.selectors';
import { CartActions } from '../../core/store/cart.actions';

@Component({
  imports: [CurrencyPipe, AsyncPipe],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  private readonly store = inject(Store)

  readonly cartItems$ = this.store.select(selectCartItems)
  readonly totalPrice$ = this.store.select(selectTotalPrice)
  readonly totalItems$ =  this.store.select(selectTotalItems)

  removeProduct(productId: number) {
    this.store.dispatch(
      CartActions.removeProduct({ productId })
    )
  }

  clearCart() {
    this.store.dispatch(CartActions.clearCart())
  }
}
