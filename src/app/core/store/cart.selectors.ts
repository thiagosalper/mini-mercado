/* 
selectors sao as pontes (interfaces ou binds) para centralizar
consultas e os calculos derivados dos estados... o compoennte
nao conhece a implementacao, apenas os selectors
*/

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "../models/cartState";

export const selectCartState = createFeatureSelector<CartState>('cart')

export const selectCartItems = createSelector(
  selectCartState,
  state => state.items
)

export const selectTotalItems = createSelector(
  selectCartItems,
  items => items.reduce(
    (total, item) => total + item.quantity,
    0
  )
)

export const selectTotalPrice = createSelector(
  selectCartItems,
  items => items.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0
  )
)