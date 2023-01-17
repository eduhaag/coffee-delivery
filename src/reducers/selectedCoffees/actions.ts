import { SelectedCoffee } from './reducer'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  UPDATE_CART_ITEM_QUANTITY = 'UPDATE_CART_ITEM_QUANTITY',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  RESTART_CART = 'RESTART_CART',
}

export function addItemToCartAction(selectedCoffee: SelectedCoffee) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      selectedCoffee,
    },
  }
}

interface UpdateCartItemInterface {
  operation: string
  itemId: string
}

export function updateCartItemAction(data: UpdateCartItemInterface) {
  return {
    type: ActionTypes.UPDATE_CART_ITEM_QUANTITY,
    payload: {
      data,
    },
  }
}

export function removeItemFromCartAction(itemId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      itemId,
    },
  }
}

export function restartCartAction() {
  return {
    type: ActionTypes.RESTART_CART,
  }
}
