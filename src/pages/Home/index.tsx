import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { CoffeeList, HomeContainer } from './styles'

import { Intro } from './components/Intro'

import { Coffees } from '../../data/products'
import { CoffeeItem } from './components/CoffeeItem'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <article>
        <h1>Nossos Cafés</h1>
        <CoffeeList>
          {Coffees.map((coffee) => {
            return <CoffeeItem key={coffee.id} coffee={coffee} />
          })}
        </CoffeeList>
      </article>
      <ToastContainer
        autoClose={1500}
        position="top-right"
        pauseOnHover={false}
        closeOnClick
        limit={3}
        pauseOnFocusLoss={false}
      />
    </HomeContainer>
  )
}
