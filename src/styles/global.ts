import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 0 transparent;
  }

  body {
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-900']};
    -webkit-font-smoothing: antialiased;
  }

  border-style, input-security, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + label {
    background: ${(props) => props.theme['purple-100']};
    box-shadow: 0 0 0 1px ${(props) => props.theme['purple-500']};
  }
`
