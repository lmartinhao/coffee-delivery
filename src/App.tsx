import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { FormProvider } from './contexts/FormContext'
import { ChakraProvider } from '@chakra-ui/react'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ChakraProvider>
        <FormProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>

          <GlobalStyle />
        </FormProvider>
      </ChakraProvider>
    </ThemeProvider>
  )
}
