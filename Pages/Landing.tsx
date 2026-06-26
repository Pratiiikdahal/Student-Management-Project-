import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Container } from 'react-bootstrap'

const Landing = () => {
  return (
    <>
    <Header/>
    <Container>
      <h2>Welcome to the landing page.</h2>
    </Container>
    <Footer/>
    </>
  )
}

export default Landing
