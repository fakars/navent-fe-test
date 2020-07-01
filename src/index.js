import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

ReactDom.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.querySelector('#root')
)
