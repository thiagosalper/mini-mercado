import { createAction, props } from "@ngrx/store";
import { Product } from "../models/product";


export const loadProductAction = createAction('[Products Page] Load Products')
export const addProductActions = createAction('[Products Page] Load Products Success', props<{products: Product[]}>())
export const onErrorFetchProducts = createAction('[Products Page] Error')