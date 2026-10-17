import { computed, Injectable, signal } from '@angular/core';
import { CartItem } from './models/cartItem';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root' // singleton, semelhante a um storage global
})
export class CartService {
  private items = signal<CartItem[]>([])

  cartItems = this.items.asReadonly() // estado somente leitura, força uso de metodos do service e isola o items

  totalItems = computed(() => // estado derivado (memo)
    this.items().reduce(
      (total, item) => total + item.quantity,
      0
    )
  )

  totalPrice = computed(() => 
    this.items().reduce(
      (total, item) =>
        total + item.product.price * item.quantity,
      0
    )
  )

  addProduct(product: Product) {
    this.items.update(items => {
      const existing = items.find(item => item.product.id === product.id)

      if (existing) {
        return items.map(item => 
          item.product.id === product.id ? { ...item, quantity: item.quantity +1 } : item
        )
      }

      return [...items, { product, quantity: 1 }]
    })
  }

  removeProduct(productId: number) {
    this.items.update(items =>
      items.filter(item => item.product.id !== productId)
    )
  }

  clearCart() {
    this.items.set([])
  }
}
