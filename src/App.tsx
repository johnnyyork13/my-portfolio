import { useState } from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import Intro from './components/Intro'
import Work from './components/Work'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'


import './App.css'

function App() {
  


  return (
    <AppContainer>
      <Header />
      <Intro />
      <Work />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </AppContainer>
  )
}


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 500px;
  margin-right: 500px;
  padding-top: 0px;
  padding-bottom: 0px;
`

export default App
