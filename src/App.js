import React, { useState, lazy, Suspense } from 'react'

import Header from './Header'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'
import Sidebar from './Sidebar'
import useWindowSize from './hooks/useWindowSize'

const AboutPage = lazy(() => import('./About'))

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
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        {/* Render the lazy-loaded component */}
        <AboutPage />
        <Skills />
        <Projects />
        <Footer />
      </Suspense>
    </main>
  )
}

export default App
