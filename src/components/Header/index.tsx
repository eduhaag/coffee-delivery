import { MapPin, ShoppingCart } from 'phosphor-react'

import { Badge, HeaderContainer, Locale } from './styles'

import logoDelivery from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export function Header() {
  const { amountCartItens } = useContext(OrderContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoDelivery} alt="" />
      </NavLink>
      <nav>
        <Locale>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Locale>
        <NavLink to="/checkout" title="Checkout">
          <Badge
            badgeContent={amountCartItens}
            invisible={amountCartItens <= 0}
            title="ver o carrinho"
          >
            <ShoppingCart size={22} weight="fill" />
          </Badge>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
