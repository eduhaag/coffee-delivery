import { ShoppingCart } from 'phosphor-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { OrderForm } from './components/OrderForm'
import { OrderItens } from './components/OrderItens'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

import { CartEmptyContainer, CheckoutContainer } from './styles'

const orderAddressValidationSchema = zod.object({
  zip: zod
    .string()
    .min(1, { message: 'Este campo é de preenchimento obrigatório' })
    .max(9, { message: 'Este formato de CEP é inválido' }),
  street: zod
    .string()
    .min(1, { message: 'Este campo é de preenchimento obrigatório' }),
  number: zod
    .string()
    .min(1, { message: 'Este campo é de preenchimento obrigatório' })
    .refine((val) => Number(val)),
  complement: zod.string(),
  district: zod
    .string()
    .min(1, { message: 'Este campo é de preenchimento obrigatório' }),
  city: zod
    .string()
    .min(1, { message: 'Este campo é de preenchimento obrigatório' }),
  provincy: zod
    .string()
    .min(1, { message: 'Este campo é de preenchimento obrigatório' }),
})

export type OrderAddressFormData = zod.infer<
  typeof orderAddressValidationSchema
>

export function Checkout() {
  const { amountCartItens, createNewOrder } = useContext(OrderContext)
  const navigate = useNavigate()

  const newOrderForm = useForm<OrderAddressFormData>({
    resolver: zodResolver(orderAddressValidationSchema),
  })

  const {
    reset,
    handleSubmit,
    formState: { errors },
  } = newOrderForm

  function handleSendOrder(data: OrderAddressFormData) {
    const orderId = createNewOrder(data)
    reset()
    navigate(`/success/order/${orderId}`)
  }

  return (
    <CheckoutContainer>
      {amountCartItens > 0 ? (
        <form onSubmit={handleSubmit(handleSendOrder)}>
          <FormProvider {...newOrderForm}>
            <OrderForm />
            <OrderItens />
          </FormProvider>
        </form>
      ) : (
        <CartEmptyContainer>
          <ShoppingCart size={160} />
          <h2>Seu carrinho ainda está vazio.</h2>
          <NavLink to="/">
            <button>Escolher um café</button>
          </NavLink>
        </CartEmptyContainer>
      )}
    </CheckoutContainer>
  )
}
