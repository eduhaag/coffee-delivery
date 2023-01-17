import { useContext } from 'react'

import {
  CoffeeInfo,
  CoffeeMenu,
  Informations,
  ItemContainer,
  ListContainer,
  RemoveButton,
} from './styles'

import { Trash } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'
import { OrderContext } from '../../../../contexts/OrderContext'
import { convertNumberToCurrencyFormat } from '../../../../utils/convertNumberToString'

export function SelectedItensList() {
  const { selectedCoffees, updateCartItemQuantity, removeItemfromCart } =
    useContext(OrderContext)

  return (
    <ListContainer>
      {selectedCoffees.map((coffee) => {
        return (
          <ItemContainer key={coffee.id}>
            <CoffeeInfo>
              <img src={coffee.coffeeImage} alt={`xícara de ${coffee.name}`} />
              <Informations>
                <span>{coffee.name}</span>
                <CoffeeMenu>
                  <Counter
                    counter={coffee.quantity}
                    incrementCounter={() => {
                      updateCartItemQuantity({
                        itemId: coffee.id,
                        operation: 'increment',
                      })
                    }}
                    decrementCounter={() => {
                      updateCartItemQuantity({
                        itemId: coffee.id,
                        operation: 'decrement',
                      })
                    }}
                  />
                  <RemoveButton
                    onClick={() => {
                      removeItemfromCart(coffee.id)
                    }}
                  >
                    <Trash size={16} />
                    REMOVER
                  </RemoveButton>
                </CoffeeMenu>
              </Informations>
            </CoffeeInfo>
            <strong>{`R$ ${convertNumberToCurrencyFormat(
              coffee.price * coffee.quantity,
            )}`}</strong>
          </ItemContainer>
        )
      })}
    </ListContainer>
  )
}
