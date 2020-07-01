import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import FiltersContainer from './filters/FiltersContainer'
import CardList from './postings/CardList'

const GlobalStyle = createGlobalStyle`
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

const AppContainer = styled.main`
  display: grid;
  grid-template-columns: 17em calc(100% - 300px);
  grid-column-gap: 0.7em;
  padding: 0.7em 5em 0.7em 5em;
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <FiltersContainer />
        <CardList />
      </AppContainer>
    </>
  )
}

export default App
