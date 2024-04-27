import { useState } from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'
import Sidebar from './Sidebar'
import useWindowSize from './hooks/useWindowSize'

function App() {
  const [sideBar, setSideBar] = useState(false)
  const { width } = useWindowSize()

  const handleClick = () => {
    setSideBar(!sideBar)
  }
  return (
    <main>
      <Header handleClick={handleClick} sideBar={sideBar} width={width} />
      {sideBar && width <= 760 ? (
        <Sidebar handleClick={handleClick} />
      ) : (
        <div style={{ color: 'red' }}></div>
      )}
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}

export default App
