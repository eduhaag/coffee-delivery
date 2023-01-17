import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    width: 100%;
    max-height: 25rem;
  }

  article {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin-top: 2rem;
    padding: 0 2rem;

    @media (min-width: 750px) {
      padding: 0 5rem;
    }
    @media (min-width: 1350px) {
      padding: 0 10rem;
    }

    h1 {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 2rem;
    }
  }
`

export const CoffeeList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  justify-items: center;

  margin-top: 3.37rem;

  @media (min-width: 590px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 880px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1150px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  li {
    display: flex;
    flex-direction: column;
    max-width: 16rem;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme['base-card']};
    border-radius: 6px 36px;

    padding: 0 1.5rem 1.5rem 1.5rem;

    img {
      max-width: 7.5rem;
      margin-top: -1.25rem;
    }

    strong {
      margin-top: 1rem;
      text-align: center;
      font-family: 'Baloo 2';
      font-weight: 700;
      font-size: 1.15rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      margin-top: 0.5rem;
      text-align: center;
      font-family: 'Roboto';
      font-size: 0.875rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-label']};
    }
  }
`
