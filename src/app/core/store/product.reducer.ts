import { createReducer, on } from "@ngrx/store"
import { Product } from "../models/product"
import { addProductActions, onErrorFetchProducts } from "./product.actions"


export interface ProductState {
  products: Product[],
  error: string | undefined,
}

export const initialProductState: ProductState = {
  products: [],
  error: undefined,
}

export const productReducer = createReducer(
  initialProductState,
  on(addProductActions, (state, {products}) => ({...state, products})),
  //
  on(onErrorFetchProducts, (state => ({...state, error: 'Algo de errado não está certo!'})))
)