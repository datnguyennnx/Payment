import { useState } from 'react'
import { Header } from './components/Header'
import { Information } from './components/Information'
import { Form } from './components/Form'
import { Footer } from './components/Footer'
function App() {

  return (
    <div className="App">
      <Header />
      <Information />  
      <Form />
      <Footer />
    </div>
  )
}

export default App
