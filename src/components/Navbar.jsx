import { useState } from 'react';
import '../styles/components/navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <div className="nav-container">
            <nav className="nav">
                <Link to="/"><img className="nav-logo" src="/images/LogoAmaviz.png" alt="Logo" /></Link>
                <div className="nav-links">
                    <Link to="/menu">Servicios</Link>
                    <Link to="/about">Acerca de</Link>
                    <Link to="/faqs">FAQs</Link>
                    <Link to="/galeria">Galería</Link>
                </div>
                <button className="nav-hamburger" onClick={() => setOpen(o => !o)}>
                    {open ? '✕' : '☰'}
                </button>
            </nav>

            <div className={`mobile-menu${open ? ' open' : ''}`}>
                <Link to="/menu" onClick={close}>Servicios</Link>
                <Link to="/about" onClick={close}>Acerca de</Link>
                <Link to="/faqs" onClick={close}>FAQs</Link>
                <Link to="/galeria" onClick={close}>Journal</Link>
            </div>
        </div>
    );
}