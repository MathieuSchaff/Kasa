// STYLE
import './App.scss'
// REACT
import React from 'react'

// DATA

// REACT ROUTER DOM
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom'
// COMPONENTS
import Header from './components/header/Header'
import Home from './pages/Home/Home'
import About from './pages/About'
import NotFound from './pages/NotFound/NotFound'
import Footer from './components/footer/Footer'
import House from './pages/House/House'

// COMPONENT APP
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/house/:houseId" element={<House />} />
        <Route path="about" element={<About />} />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  )
}

export default App
