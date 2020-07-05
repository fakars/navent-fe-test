import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import FiltersContainer from './filters/FiltersContainer'
import CardList from './postings/CardList'
import LeadModal from './modal/Modal'
import theme from '../theme'

const GlobalStyles = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: ${({ theme }) => theme.fonts.family};
 }
 body {
  background: ${({ theme }) => theme.bg.main_bg};  
 }
`

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 19em calc(100% - 400px);
  grid-column-gap: 0.7em;
  padding: 0.7em 5em 0.7em 5em;
`

const App = ({ leadModalActive }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles leadModalActive={leadModalActive} />
      <Wrapper>
        <FiltersContainer />
        <CardList />
      </Wrapper>
      <LeadModal />
    </ThemeProvider>
  )
}

export default App
