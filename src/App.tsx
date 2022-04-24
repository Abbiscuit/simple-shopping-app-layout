import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>}></Route>
      <Route path="/about" element={<div>About</div>}></Route>
      <Route path="/profile" element={<div>Profile</div>}></Route>
    </Routes>
  )
}
export default App
