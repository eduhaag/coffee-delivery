import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useReducer,
} from 'react'
import {
  addItemToCartAction,
  removeItemFromCartAction,
  restartCartAction,
  updateCartItemAction,
} from '../reducers/selectedCoffees/actions'
import {
  SelectedCoffee,
  SelectedCoffeesReducer,
} from '../reducers/selectedCoffees/reducer'

interface OrderContextProviderProps {
  children: ReactNode
}

export interface DeliveryAddress {
  zip: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  provincy: string
}

interface UpdateCartItemQuantityProps {
  itemId: string
  operation: 'increment' | 'decrement'
}

export interface Order {
  id: string
  OrderedCoffees: SelectedCoffee[]
  address: DeliveryAddress
  paymentMethod: string
  deliveryPrice: number
}

export const PAYMENT_METHODS = {
  credit: 'Cartão de crédito',
  debt: 'Cartão de débito',
  money: 'Dinheiro',
} as const

interface OrderContextType {
  selectedCoffees: SelectedCoffee[]
  orders: Order[]
  amountCartItens: number
  deliveryPrice: number
  paymentMethod: string | null
  totalInvoice: number
  addItemToCart: (item: SelectedCoffee) => void
  changePaymentMethod: (paymentMethod: keyof typeof PAYMENT_METHODS) => void
  updateCartItemQuantity: ({
    itemId,
    operation,
  }: UpdateCartItemQuantityProps) => void
  removeItemfromCart: (itemId: string) => void
  createNewOrder: (data: DeliveryAddress) => string
  getOrderById: (id: string) => Order | undefined
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [selectedCoffees, dispatch] = useReducer(
    SelectedCoffeesReducer,
    [],
    (initialValue) => {
      const storedStateAsJson = localStorage.getItem(
        '@coffee-delivery:selected-coffees-state-1.0.0',
      )

      if (!storedStateAsJson) {
        return initialValue
      }

      return JSON.parse(storedStateAsJson)
    },
  )
  const [paymentMethod, setPaymentMethod] = useState<
    keyof typeof PAYMENT_METHODS | null
  >(null)
  const [totalInvoice, settotalInvoice] = useState(0)
  const [orders, setOrders] = useState<Order[]>([])

  const amountCartItens = selectedCoffees.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)

  const deliveryPrice = 3.5

  useEffect(() => {
    const total = selectedCoffees.reduce((acc, item) => {
      return (acc += item.price * item.quantity)
    }, 0)

    settotalInvoice(total)

    const selectedCoffessJson = JSON.stringify(selectedCoffees)

    localStorage.setItem(
      '@coffee-delivery:selected-coffees-state-1.0.0',
      selectedCoffessJson,
    )
  }, [selectedCoffees])

  function addItemToCart(selectedCoffee: SelectedCoffee) {
    dispatch(addItemToCartAction(selectedCoffee))
  }

  function updateCartItemQuantity({
    itemId,
    operation,
  }: UpdateCartItemQuantityProps) {
    dispatch(updateCartItemAction({ operation, itemId }))
  }

  function changePaymentMethod(paymentMethod: keyof typeof PAYMENT_METHODS) {
    setPaymentMethod(paymentMethod)
  }

  function removeItemfromCart(itemId: string) {
    dispatch(removeItemFromCartAction(itemId))
  }

  function createNewOrder(data: DeliveryAddress): string {
    const orderId = String(new Date().getTime())

    setOrders((state) => [
      ...state,
      {
        id: orderId,
        address: data,
        deliveryPrice,
        OrderedCoffees: selectedCoffees,
        paymentMethod: paymentMethod
          ? PAYMENT_METHODS[paymentMethod]
          : 'Dinheiro',
      },
    ])

    dispatch(restartCartAction())
    setPaymentMethod(null)

    return orderId
  }

  function getOrderById(id: string): Order | undefined {
    return orders.find((order) => order.id === id)
  }

  return (
    <OrderContext.Provider
      value={{
        orders,
        selectedCoffees,
        amountCartItens,
        addItemToCart,
        deliveryPrice,
        totalInvoice,
        paymentMethod,
        changePaymentMethod,
        updateCartItemQuantity,
        removeItemfromCart,
        createNewOrder,
        getOrderById,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
