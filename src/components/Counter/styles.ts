import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['base-button']};
  width: 4.5rem;

  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    color: ${({ theme }) => theme.purple};
    cursor: pointer;
    transition: color 0.2s;
    border: 0;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  span {
    color: ${({ theme }) => theme['base-title']};
    font-size: 0.875rem;
    text-align: center;
    padding: 0 0.15rem;
    flex: 1;
  }
`
