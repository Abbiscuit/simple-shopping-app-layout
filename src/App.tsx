import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'
import NotFoundPage from './pages/NotFoundPage'
import FavoritePage from './pages/FavoritePage'
import CounterPage from './pages/CounterPage'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/favorite" element={<FavoritePage />}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/counter" element={<CounterPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  )
}
export default App
