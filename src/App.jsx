import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Routes/Home'

import Contacto from './Routes/Contacto'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/dentista/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
