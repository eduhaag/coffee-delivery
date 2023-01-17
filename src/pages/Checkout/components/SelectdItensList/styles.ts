import styled from 'styled-components'

export const ListContainer = styled.ul`
  list-style: none;
`

export const ItemContainer = styled.li`
  display: flex;
  flex: 1;
  padding: 0.5rem 0.25rem 2rem;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  & + & {
    margin-top: 1.5rem;
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;

  img {
    width: 4rem;
  }

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CoffeeMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background: ${(props) => props.theme['base-button']};

  border-radius: 6px;
  border: 0;
  padding: 0.5rem;

  font-size: 0.75rem;
  line-height: 160%;

  color: ${(props) => props.theme['base-text']};

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
