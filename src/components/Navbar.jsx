import { useState } from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <div className="nav-container">
            <nav className="nav">
                <Link to="/"><img src="../images/LogoAmaviz.png" alt="Logo" height="100" /></Link>
                <div className="nav-links">
                    <Link to="/services">Servicios</Link>
                    <Link to="/about">Acerca de</Link>
                    <Link to="/faqs">FAQS</Link>
                    <Link to="/journal">Journal</Link>
                </div>
                <button className="nav-hamburger" onClick={() => setOpen(o => !o)}>
                    {open ? '✕' : '☰'}
                </button>
            </nav>

            <div className={`mobile-menu${open ? ' open' : ''}`}>
                <Link to="/services" onClick={close}>Servicios</Link>
                <Link to="/about" onClick={close}>Acerca de</Link>
                <Link to="/faqs" onClick={close}>FAQs</Link>
                <Link to="/journal" onClick={close}>Journal</Link>
            </div>
        </div>
    );
}