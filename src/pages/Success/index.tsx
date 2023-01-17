import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { OrderInformation, PageContainer } from './styles'

import ilustration from '../../assets/success_ilustration.svg'
import { RoundedIcon } from './components/RoudedIcon'
import { defaultTheme } from '../../styles/themes/default'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { Order, OrderContext } from '../../contexts/OrderContext'

export function Success() {
  const [order, setOrder] = useState<Order>()

  const { getOrderById } = useContext(OrderContext)
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      setOrder(getOrderById(id))
    }
  }, [id, getOrderById])

  return (
    <PageContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div className="success-information">
        <OrderInformation>
          <div className="information-box">
            <RoundedIcon backGround="purple">
              <MapPin size={16} weight="fill" color={defaultTheme.background} />
            </RoundedIcon>
            <div className="information">
              <p>
                Entrega em{' '}
                <strong>{`Rua ${order?.address.street}, ${
                  order?.address.number
                }${
                  order?.address.complement && ', ' + order?.address.complement
                } `}</strong>
              </p>
              <p>{`${order?.address.district} - ${order?.address.city}, ${order?.address.provincy}`}</p>
            </div>
          </div>
          <div className="information-box">
            <RoundedIcon backGround="yellow">
              <Timer size={16} weight="fill" color={defaultTheme.background} />
            </RoundedIcon>
            <div className="information">
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min </strong>
            </div>
          </div>
          <div className="information-box">
            <RoundedIcon backGround="yellow-dark">
              <CurrencyDollar
                size={16}
                weight="fill"
                color={defaultTheme.background}
              />
            </RoundedIcon>
            <div className="information">
              <p>Pagamento na entrega</p>
              <strong>{order?.paymentMethod}</strong>
            </div>
          </div>
        </OrderInformation>
        <img
          src={ilustration}
          alt="desenho de um entregador com uma moto roxa e uma caixa na garupa"
        />
      </div>
    </PageContainer>
  )
}
