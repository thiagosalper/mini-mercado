import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from '../../core/cart';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  cart = inject(CartService)
}
