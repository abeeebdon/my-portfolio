import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './Component/Header'
import Home from './Component/Home'
import About from './Component/About'
import Skills from './Component/Skills'
import Projects from './Component/Projects'
import Footer from './Component/Footer'
import Sidebar from './Component/Sidebar'
import useWindowSize from './hooks/useWindowSize'
import project from './Data'

function App() {
  const [sideBar, setSideBar] = useState(false)
  const [projects, setProjects] = useState(project)
  const { width } = useWindowSize()

  const handleClick = () => {
    setSideBar(!sideBar)
  }
  return (
    <div>
      <Header handleClick={handleClick} sideBar={sideBar} width={width} />
      {sideBar && width <= 760 ? (
        <Sidebar handleClick={handleClick} />
      ) : (
        <div style={{ color: 'red' }}>N</div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skills />} />
        <Route
          path="/projects"
          element={<Projects projects={project} setProjects={setProjects} />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
