import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import ProductDetails from './components/ProductDetails.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  )
}

export default App
