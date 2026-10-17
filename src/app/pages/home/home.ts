import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCard } from '../../features/products/product-card/product-card';
import { Product } from '../../core/models/product';
import { CartService } from '../../core/cart';

@Component({
  imports: [ProductCard],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private router = inject(Router)
  cart = inject(CartService)

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


  // addProductToCart() {
  //   this.router.navigate(['/cart'])
  // }
}
