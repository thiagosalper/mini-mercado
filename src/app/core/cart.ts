import { computed, Injectable, signal } from '@angular/core';
import { CartItem } from './models/cartItem';
import { Product } from './models/product';
import { BehaviorSubject, distinctUntilChanged, map } from 'rxjs';

@Injectable({
  providedIn: 'root' // singleton, semelhante a um storage global
})
export class CartService {
  private readonly cartSubject = new BehaviorSubject<CartItem[]>([])

  readonly cartItems$ = this.cartSubject.asObservable() // estado somente leitura, força uso de metodos do service e isola o items

  /*
  sufixo $ nas variaveis é uma convesao para indicar Observable
  */

  readonly totalItems$ = this.cartItems$.pipe(
    map(items => items.reduce((total, item) => total + item.quantity, 0)),
    distinctUntilChanged() // impede emitir novo valor se for igual ao anterior
  )

  readonly totalPrice$ = this.cartItems$.pipe(
    map(items => items.reduce((total, item) => total + item.product.price * item.quantity, 0)),
    distinctUntilChanged()
  )

  addProduct(product: Product) {

  console.log('Adicionando produto:', product);
    const items = this.cartSubject.getValue()

    const existing = items.find(item => item.product.id === product.id)

    const updatedItems = existing ?
        items.map(item => 
          item.product.id === product.id ? { ...item, quantity: item.quantity +1 } : item
        )
      : [...items, { product, quantity: 1 }]

    this.cartSubject.next(updatedItems)
  }

  removeProduct(productId: number) {
    const updatedItems = this.cartSubject.getValue().filter(item => item.product.id !== productId)
    this.cartSubject.next(updatedItems)
  }

  clearCart() {
    this.cartSubject.next([])
  }
}
