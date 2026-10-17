import { Component, input, output } from '@angular/core';
import { Product } from '../../../core/models/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<Product>()
  addToCart = output<Product>()
}
