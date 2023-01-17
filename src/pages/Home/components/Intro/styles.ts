import styled from 'styled-components'

import introBackground from '../../../../assets/intro-background.png'

export const IntroContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 2rem;

  background: url(${introBackground});

  @media (min-width: 750px) {
    padding: 1.87rem 5rem 1.69rem;
  }
  @media (min-width: 1350px) {
    padding: 1.87rem 10rem 1.69rem;
  }
`

export const IntroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 37rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
  }
`

export const InfoDetailsContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 1.25rem 2.5rem;
  grid-template-columns: 15rem 1fr;
`

const VARIANT_COLOR = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
  'base-text': 'base-text',
} as const

interface InfoDetailItemProps {
  variantColor: keyof typeof VARIANT_COLOR
}

export const InfoDetailsItem = styled.div<InfoDetailItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    border-radius: 50%;

    background: ${(props) => props.theme[VARIANT_COLOR[props.variantColor]]};
    color: ${(props) => props.theme.background};
  }
`

export const IntroImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 29rem;
  }
`
