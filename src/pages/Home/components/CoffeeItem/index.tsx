import { ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'

import { Counter } from '../../../../components/Counter'
import { OrderContext } from '../../../../contexts/OrderContext'
import { Coffee } from '../../../../reducers/selectedCoffees/reducer'

import { AddToCartButton, BuyInfo, CoffeeTags } from './styles'

interface CoffeeItemProps {
  coffee: Coffee
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const { addItemToCart } = useContext(OrderContext)
  const [quantity, setQuantity] = useState(1)

  function handleAddItemToCart() {
    if (quantity > 0) {
      addItemToCart({ ...coffee, quantity })
      toast.success('Seu café adicionado ao carrinho!', {
        icon: () => <ShoppingCartSimple weight="fill" size={24} />,
      })
    }
  }

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 0) setQuantity((state) => state - 1)
  }

  return (
    <li key={coffee.id}>
      <img src={coffee.coffeeImage} alt={`uma xícara de café ${coffee.name}`} />
      <CoffeeTags>
        {coffee.tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </CoffeeTags>
      <strong>{coffee.name}</strong>
      <p>{coffee.description}</p>
      <BuyInfo>
        <div>
          <span>R$</span>
          <strong>
            {coffee.price.toFixed(2).toString().replace('.', ',')}
          </strong>
        </div>
        <div>
          <Counter
            counter={quantity}
            decrementCounter={decrementQuantity}
            incrementCounter={incrementQuantity}
          />
          <AddToCartButton
            onClick={handleAddItemToCart}
            title="por no carrinho"
          >
            <ShoppingCartSimple />
          </AddToCartButton>
        </div>
      </BuyInfo>
    </li>
  )
}
