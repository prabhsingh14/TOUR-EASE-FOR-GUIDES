import './App.css'
import Navbar from './components/layout/Navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Guide from './components/registration/Guide'
import Agency from './components/registration/Agency'
import "@fontsource/poppins";

function App() {
  return (
    <div className="w-screen min-h-screen bg-[#FF6F0026] flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-guide" element={<Guide />} />
        <Route path="/register-agency" element={<Agency />} />
      </Routes>
    </div>
  )
}

export default App
