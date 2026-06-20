import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AboutMe from './pages/aboutMe'
import LandingPages from './pages/landingPages'
import Catalogo from './pages/catalogo'
import DetalleProducto from './pages/detalleProducto'

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Routes>
      <Route path='/about' element={<AboutMe></AboutMe>}></Route>
      <Route path='/' element={<LandingPages></LandingPages>}></Route>
      <Route path='/catalogo' element={<Catalogo></Catalogo>}></Route>
      <Route path='/producto/:id' element={<DetalleProducto></DetalleProducto>}></Route>
    </Routes>
  )
}

export default App
