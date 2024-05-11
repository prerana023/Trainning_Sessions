import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Store from './components/Store'
import CheckoutForm from './components/Checkout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route index element={< Store/>}></Route>
      <Route path='/checkout' element={< CheckoutForm/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
