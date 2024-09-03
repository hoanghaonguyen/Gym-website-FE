import React from 'react'
import Header from '../../components/Header'
import './home.css'
import Program from '../../components/Program'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Program />
      <Values />
      <FAQs />
      <Testimonials />  
      <Footer />
    </>
  )
}

export default Home