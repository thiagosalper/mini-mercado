import { Component, inject, OnInit } from '@angular/core';
import { ProductCard } from '../../features/products/product-card/product-card';
import { Product } from '../../core/models/product';
import { Store } from '@ngrx/store';
import { CartActions } from '../../core/store/cart.actions';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { loadProductAction } from '../../core/store/product.actions';
import { readError } from '../../core/store/product.selectors';

@Component({
  imports: [ProductCard, AsyncPipe, JsonPipe],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit {
  private readonly store    = inject(Store)
  readonly products$       = this.store.select(state => state.products.products)
  readonly prodError$          = this.store.select(readError)


  addToCart(product: Product) {
    this.store.dispatch(
      CartActions.addProduct({ product })
    )
  }

  ngOnInit(): void {
    this.store.dispatch(loadProductAction())
  }

}
