import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --toastify-color-progress-success: ${(props) => props.theme.purple};
    --toastify-color-light: ${(props) => props.theme['base-card']};
    --toastify-text-color-success: ${(props) => props.theme['base-text']};
    --toastify-icon-color-success: ${(props) => props.theme.purple};
    --toastify-font-family: 'Roboto', sans-serif;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']}
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-subtitle']};
    -webkit-font-smoothing: antialiased; 
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  
`
