import styled from 'styled-components'

export type IconBackgroundColors =
  | 'yellow'
  | 'yellow-dark'
  | 'purple'
  | 'base-text'

interface ContainerProps {
  bgColor: IconBackgroundColors
}

export const RoudedIconContainer = styled.div<ContainerProps>`
  background-color: ${({ bgColor, theme }) => theme[bgColor]};
  padding: 0.5rem;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
`
