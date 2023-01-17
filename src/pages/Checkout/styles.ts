import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 2rem;
  padding: 0 2rem;
  margin-top: 2.5rem;
  width: 100%;

  form {
    display: flex;
    flex: 1;
    flex-direction: row;
    gap: 2rem;
  }

  @media (min-width: 750px) {
    padding: 0 5rem;
  }
  @media (min-width: 1350px) {
    padding: 0 10rem;
  }

  @media (max-width: 940px) {
    flex-direction: column;
  }
`

export const CartEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 50vh;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme['base-label']};
  }

  h2 {
    margin-top: 1rem;
    font-weight: 700;
    font-size: 2rem;
    color: ${(props) => props.theme['base-text']};
  }

  a {
    margin-top: 2rem;
  }

  button {
    background: ${(props) => props.theme.yellow};
    padding: 0.5rem 2rem;
    border: 0;

    border-radius: 6px;

    color: ${(props) => props.theme.white};

    font-weight: 700;
    font-size: 1.5rem;
    font-stretch: 100;

    cursor: pointer;

    transition: background-color 0.2s;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`
