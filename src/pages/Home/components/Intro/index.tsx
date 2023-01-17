import {
  InfoDetailsContainer,
  InfoDetailsItem,
  IntroContainer,
  IntroImage,
  IntroInfo,
} from './styles'

import introImage from '../../../../assets/intro.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Intro() {
  return (
    <IntroContainer>
      <IntroInfo>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <InfoDetailsContainer>
          <InfoDetailsItem variantColor="yellow-dark">
            <div>
              <ShoppingCart size={16} weight="fill" />
            </div>
            Compra simples e segura
          </InfoDetailsItem>
          <InfoDetailsItem variantColor="base-text">
            <div>
              <Package size={16} weight="fill" />
            </div>
            Embalagem mantém o café intacto
          </InfoDetailsItem>
          <InfoDetailsItem variantColor="yellow">
            <div>
              <Timer size={16} weight="fill" />
            </div>
            Entrega rápida e rastreada
          </InfoDetailsItem>
          <InfoDetailsItem variantColor="purple">
            <div>
              <Coffee size={16} weight="fill" />
            </div>
            O café chega fresquinho até você
          </InfoDetailsItem>
        </InfoDetailsContainer>
      </IntroInfo>
      <IntroImage>
        <img src={introImage} alt="" />
      </IntroImage>
    </IntroContainer>
  )
}
