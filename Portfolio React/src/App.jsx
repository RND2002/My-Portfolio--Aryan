import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/nav/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'

const App = () => {
  return (
        <>
        <Header/>
        <Navbar/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Services/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        </>
    
  )
}

export default App