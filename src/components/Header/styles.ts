import styled from 'styled-components'
import BadgeUnstyled, { badgeUnstyledClasses } from '@mui/base/BadgeUnstyled'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 750px) {
    padding: 2rem 5rem;
  }
  @media (min-width: 1350px) {
    padding: 2rem 10rem;
  }

  img {
    height: 2.5rem;
  }

  nav {
    display: flex;
    gap: 0.75rem;
  }

  a {
  }
`

export const Locale = styled.div`
  display: flex;
  align-items: center;

  gap: 4px;
  padding: 0.5rem;
  border-radius: 6px;

  font-size: 0.875rem;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const Badge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0.5rem;
  font-size: 0.75rem;
  position: relative;
  display: inline-block;
  line-height: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};

  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
    min-width: 1.25rem;
    height: 1.25rem;
    padding: 0 6px;
    color: ${(props) => props.theme.white};
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 22px;
    white-space: nowrap;
    text-align: center;
    border-radius: 12px;
    background: ${(props) => props.theme['yellow-dark']};
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }

  & .${badgeUnstyledClasses.invisible} {
    opacity: 0;
    pointer-events: none;
  }
`
