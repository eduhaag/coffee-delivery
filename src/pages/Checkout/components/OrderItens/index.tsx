import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'
import { convertNumberToCurrencyFormat } from '../../../../utils/convertNumberToString'
import { SelectedItensList } from '../SelectdItensList'
import {
  BuyButton,
  InvoiceContainer,
  OrderItensCard,
  OrderItensContainer,
} from './styles'

export function OrderItens() {
  const { totalInvoice, deliveryPrice } = useContext(OrderContext)

  return (
    <OrderItensContainer>
      <h3>Cafés selecionados</h3>
      <OrderItensCard>
        <SelectedItensList />
        <InvoiceContainer>
          <div>
            <p>Total de itens</p>
            <span>{`R$ ${convertNumberToCurrencyFormat(totalInvoice)}`}</span>
          </div>
          <div>
            <p>Entrega</p>
            <span>{`R$ ${convertNumberToCurrencyFormat(deliveryPrice)}`}</span>
          </div>
          <div>
            <strong>Total</strong>
            <strong>{`R$ ${convertNumberToCurrencyFormat(
              totalInvoice + deliveryPrice,
            )}`}</strong>
          </div>
        </InvoiceContainer>
        <BuyButton type="submit">CONFIRMAR PEDIDO</BuyButton>
      </OrderItensCard>
    </OrderItensContainer>
  )
}
