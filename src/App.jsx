import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Faqs from "./pages/Faqs";
import Galeria from "./pages/Galeria";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/faqs" element={<Faqs />}/>
            <Route path="/galeria" element={<Galeria />}/>
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
