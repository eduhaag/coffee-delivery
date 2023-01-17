import styled from 'styled-components'

export const OrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.937rem;
  gap: 0.75rem;
`

export const FormCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  max-width: 40rem;

  padding: 2.5rem;
  border-radius: 6px;

  @media (max-width: 940px) {
    max-width: none;
  }
`

export const FormCardInformation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme['base-subtitle']};

    &:last-child {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
      margin-top: 0.125rem;
    }
  }
`

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  border: 0;
  gap: 1rem;

  label {
    position: relative;
    display: flex;
    flex: 1;
  }

  i {
    position: absolute;
    right: 0.75rem;
    top: 25%;
    font-size: 0.75rem;
    color: ${({ theme }) => theme['base-label']};
    font-style: italic;
  }

  .toggle-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .toggle-item {
    padding: 1rem 0.5rem;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme['base-text']};
    display: flex;
    align-items: center;
    gap: 0.6rem;
    background-color: ${({ theme }) => theme['base-button']};
    border: none;
    border-radius: 6px;
    margin-bottom: 1rem;
    cursor: pointer;
    font-size: 0.7rem;

    svg {
      color: ${(props) => props.theme.purple};
    }

    &:hover {
      background-color: ${({ theme }) => theme['base-hover']};
    }

    @media (min-width: 750px) {
      flex: 1;
    }
  }

  .toggle-item[data-state='on'] {
    background-color: ${({ theme }) => theme['purple-light']};
    outline: 1.5px solid ${({ theme }) => theme.purple};
  }
`

interface InputErrorProps {
  isInputInvalid?: boolean
}

export const InputSeparator = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 12.5rem;
  }
`

export const TextInput = styled.input<InputErrorProps>`
  max-height: 2.625rem;
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  border: 1.5px solid
    ${({ theme, isInputInvalid }) =>
      isInputInvalid ? theme['yellow-dark'] : theme['base-button']};
  border-radius: 4px;

  font-size: 0.875rem;

  width: ${({ width }) => width || '12.5rem'};
  padding: 0.75rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const SelectInput = styled.select`
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  font-size: 0.875rem;

  width: 4rem;
  max-height: 2.625rem;
  padding: 0.75rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const ToogleContainer = styled.div<InputErrorProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const ErrorMessage = styled.span`
  font-size: 0.725rem;
  display: flex;
  align-items: center;
  gap: 0.15rem;
  font-weight: 700;
  color: ${(props) => props.theme['yellow-dark']};
  margin: -0.35rem 0 0.4rem 0;
`
