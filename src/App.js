import React, { useState, lazy, Suspense } from 'react'

import Header from './Header'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'
import Sidebar from './Sidebar'
import useWindowSize from './hooks/useWindowSize'
import About from './About'

const PPage = lazy(() => import('./Projects'))

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
        <Sidebar handleClick={handleClick} setSideBar={setSideBar} />
      ) : (
        <div style={{ color: 'red' }}></div>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        {/* Render the lazy-loaded component */}
        <About />
        <Skills />
        <PPage />
        <Footer />
      </Suspense>
    </main>
  )
}

export default App
