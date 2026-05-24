import './App.css'
import { Routes, Route } from 'react-router-dom'
import AboutMe from './pages/aboutMe'
import LandingPages from './pages/landingPages'
import Catalogo from './pages/catalogo'


function App() {
  return (
    <Routes>
      <Route path='/about' element={<AboutMe></AboutMe>}></Route>
      <Route path='/' element={<LandingPages></LandingPages>}></Route>
      <Route path='/catalogo' element={<Catalogo></Catalogo>}></Route>
    </Routes>
  )
}

export default App
