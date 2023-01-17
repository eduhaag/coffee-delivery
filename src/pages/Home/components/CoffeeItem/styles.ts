import styled from 'styled-components'

export const CoffeeTags = styled.div`
  margin-top: 0.75rem;
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;

  span {
    display: flex;
    text-align: center;
    padding: 0.25rem 0.5rem;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    border-radius: 100px;

    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;

    text-transform: uppercase;
  }
`

export const BuyInfo = styled.div`
  margin-top: 2.06rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.44rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:first-child {
      color: ${(props) => props.theme['base-text']};
      gap: 0.25rem;

      strong {
        margin: 0;
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 1.5rem;
        line-height: 130%;
      }

      span {
        margin: 0;
        font-family: 'Roboto';
        font-size: 0.875rem;
        line-height: 130%;
      }
    }

    &:last-child {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }
`

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
