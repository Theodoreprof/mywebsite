import React from 'react'

//components imports
import Header from  './components/header/header'
import Navigation from  './components/navigation/navigation'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'


const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App