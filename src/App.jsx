import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from "./pages/Home";
import Services from "./pages/Services";
import Faciales from "./pages/Services/facial/faciales";
import FacialesAutor from "./pages/Services/facial/facialesAutor";
import Corporal from "./pages/Services/corporal/corporal";
import Laser from "./pages/Services/laser/laser";
import MasServicios from "./pages/Services/masServicios/masServicios";
import About from "./pages/About";
import Faqs from "./pages/Faqs";
import Journal from "./pages/Journal";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />}/>
            <Route path="/services/faciales" element={<Faciales />}/>
            <Route path="/services/faciales/faciales-de-autor" element={<FacialesAutor />}/>
            <Route path="/services/corporal" element={<Corporal />}/>
            <Route path="/services/laser" element={<Laser />}/>
            <Route path="/services/mas-servicios" element={<MasServicios />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/faqs" element={<Faqs />}/>
            <Route path="/journal" element={<Journal />}/>
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
