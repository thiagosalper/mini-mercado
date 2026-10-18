/* 
aqui definimos como o estado vai mudar, o que acontece depois que disparamos uma intencao...
o reducer recebe o estado atual e uma acao, e devolve um novo estado... sem alterar o original
*/

import { createReducer, on } from "@ngrx/store";
import { CartActions } from "./cart.actions";
import { CartState } from "../models/cartState";

export const initialCartState: CartState = {
  items: []
}

export const cartReducer = createReducer(
  initialCartState,

  on(CartActions.addProduct, (state, { product }) => {
    const existing = state.items.find(
      item => item.product.id === product.id
    )

    const items = existing 
      ? state.items.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
        )
      : [...state.items, { product, quantity: 1 }]

    return { ...state, items }
  }),

  on(CartActions.removeProduct, (state, { productId }) => ({
    ...state, 
    items: state.items.filter(
      item => item.product.id !== productId
    )
  })),

  on(CartActions.clearCart, () => initialCartState)
)