import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product";


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient)

  getAll(): Observable<Product[]> {

    return this.http.get<Product[]>('https://thiagosalper.github.io/json/products.json')
  }
}