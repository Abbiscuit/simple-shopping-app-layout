import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import TemplatePage from './pages/TemplatePage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/template" element={<TemplatePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
    </Routes>
  )
}
export default App
