import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Products from './Pages/Product'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App