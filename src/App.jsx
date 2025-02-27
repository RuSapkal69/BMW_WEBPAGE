import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import Features from './components/Features'
import Engine from './components/Engine'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Engine />
      <Footer />
    </main>
  )
}

export default App
