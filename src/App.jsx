import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import NotFound from './components/NotFound.jsx'
import ProductDetails from './components/ProductDetails.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
