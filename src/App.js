import { Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Home from './Component/Home'
import About from './Component/About'
import Skills from './Component/Skills'
import Projects from './Component/Projects'
import Footer from './Component/Footer'

function App() {
  const handleClick = () => {
    console.log('I clicked')
  }
  return (
    <div>
      <Header onClick={handleClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
