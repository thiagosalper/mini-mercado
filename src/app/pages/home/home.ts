import { Component, inject } from '@angular/core';
import { ProductCard } from '../../features/products/product-card/product-card';
import { Product } from '../../core/models/product';
import { Store } from '@ngrx/store';
import { CartActions } from '../../core/store/cart.actions';

@Component({
  imports: [ProductCard],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private readonly store = inject(Store)

  addToCart(product: Product) {
    this.store.dispatch(
      CartActions.addProduct({ product })
    )
  }

  products: Product[] = [
    {
      id: 1,
      name: 'Fone Bluetooth',
      description: 'Som de qualidade para o dia a dia',
      price: 199.90,
      image: 'https://placehold.co/300x200?text=Fone'
    },
    {
      id: 2,
      name: 'Teclado Mecânico',
      description: 'Teclas confortáveis para trabalhar',
      price: 349.90,
      image: 'https://placehold.co/300x200?text=Teclado'
    },
    {
      id: 3,
      name: 'Mouse sem fio',
      description: 'Precisão e praticidade',
      price: 129.90,
      image: 'https://placehold.co/300x200?text=Mouse'
    }
  ];

}
