import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import BeforeAfter from './components/BeforeAfter'
import QuoteForm from './components/QuoteForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Services />
      <BeforeAfter />
      <QuoteForm />
      <Footer />
    </div>
  )
}

export default App
