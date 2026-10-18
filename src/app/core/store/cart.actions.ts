import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Product } from "../models/product";

/* 
aqui sao intencoes, vamos gerar eventos com action tipada (CartAction.addPro...)
*/

export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Add Product': props<{ product: Product }>(),
    'Remove Product': props<{ productId: number }>(),
    'Clear Cart': emptyProps(),
  }
})

