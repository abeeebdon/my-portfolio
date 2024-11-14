import React, { useState } from 'react'

import Header from './Header'
import Home from './Home'
import Skills from './Skills'
import Footer from './Footer'
import Sidebar from './Sidebar'
import useWindowSize from './hooks/useWindowSize'
import About from './About'
import Experience from './Experience'
import PPage from './Projects'

function App() {
  const [sideBar, setSideBar] = useState(false)
  const { width } = useWindowSize()

  const handleClick = () => {
    setSideBar(!sideBar)
  }
  return (
    <main>
      <Header handleClick={handleClick} sideBar={sideBar} width={width} />
      {sideBar && width <= 760 && (
        <Sidebar handleClick={handleClick} setSideBar={setSideBar} />
      )}
      <Home />
      {/* Render the lazy-loaded component */}
      <About />
      <Experience />
      <Skills />
      <PPage />
      <Footer />
    </main>
  )
}

export default App
