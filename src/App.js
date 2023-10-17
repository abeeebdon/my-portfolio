import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './Component/Header'
import Home from './Component/Home'
import About from './Component/About'
import Skills from './Component/Skills'
import Projects from './Component/Projects'
import Footer from './Component/Footer'
import Sidebar from './Component/Sidebar'

function App() {
  const [sideBar, setSideBar] = useState(false)
  const handleClick = () => {
    setSideBar(!sideBar)
  }
  return (
    <div>
      <Header onClick={handleClick} />
      {sideBar ? <Sidebar /> : <div>Error</div>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
