import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Coffee {
  id: string
  name: string
  coffeeImage: string
  description: string
  tags: string[]
  price: number
}

export interface SelectedCoffee extends Coffee {
  quantity: number
}

export function SelectedCoffeesReducer(state: SelectedCoffee[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      const { id, quantity } = action.payload.selectedCoffee
      console.log({ payload: action.payload })

      const coffeeAlreadyAdded = state.findIndex((item) => item.id === id)
      console.log({ coffeeAlreadyAdded })
      if (coffeeAlreadyAdded >= 0) {
        return produce(state, (draft) => {
          draft[coffeeAlreadyAdded].quantity += quantity
        })
      } else {
        return produce(state, (draft) => {
          draft.push(action.payload.selectedCoffee)
        })
      }
    }
    case ActionTypes.UPDATE_CART_ITEM_QUANTITY: {
      const { operation, itemId } = action.payload.data

      const cartItemIndex = state.findIndex((item) => item.id === itemId)

      return produce(state, (draft) => {
        if (operation === 'increment') {
          draft[cartItemIndex].quantity++
        } else {
          draft[cartItemIndex].quantity--
        }
      })
    }
    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const { itemId } = action.payload

      return state.filter((coffee) => coffee.id !== itemId)
    }
    case ActionTypes.RESTART_CART:
      return []
    default:
      return state
  }
}
