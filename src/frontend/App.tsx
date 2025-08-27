
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import '../App.css'
import { Home } from './apps/routes'
import { Register } from './apps/auth/register/routes'



function App() {
  

  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem"}}>
        <Link to={"/"}>Inicio</Link>
        <Link to={"/auth/register"}>Registro</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='auth/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
