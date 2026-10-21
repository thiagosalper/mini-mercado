import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.reducer";

const errorState = createFeatureSelector<ProductState>('products')
export const readError = createSelector(errorState, (state: ProductState) => state.error)