import styled from 'styled-components'

export const OrderItensContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const OrderItensCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;

  margin-top: 0.937rem;
  padding: 2.5rem;
`

export const InvoiceContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }

  span {
    text-align: right;
    color: ${(props) => props.theme['base-text']};
  }

  strong {
    font-weight: 700;
    font-size: 1.25rem;

    text-align: right;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const BuyButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 0.5rem;
  text-align: center;

  background: ${(props) => props.theme.yellow};

  border: 0;
  border-radius: 6px;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;

  color: ${(props) => props.theme.white};
  font-stretch: 100;

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
