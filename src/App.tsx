import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<div>About</div>}></Route>
      <Route path="/profile" element={<div>Profile</div>}></Route>
    </Routes>
  )
}
export default App
