import { AsyncPipe, CurrencyPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from '../../core/cart';

@Component({
  imports: [CurrencyPipe, AsyncPipe, JsonPipe],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  cart = inject(CartService)
}
