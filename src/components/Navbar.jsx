import { useState } from 'react';
import '../styles/navbar.css';

export default function Navbar() {

    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <div className="nav-container">
            <nav className="nav">
                <img src="../images/LogoAmaviz.png" href="#" alt="Logo" width="" height="100" />
                <div className="nav-links">
                    <a href="#services">Servicios</a>
                    <a href="#about">Acerca de</a>
                    <a href="#faqs">FAQs</a>
                    <a href="#journal">Journal</a>
                </div>
                <button className="nav-hamburger" onClick={() => setOpen(o => !o)}>
                    {open ? '✕' : '☰'}
                </button>
            </nav>

            <div className={`mobile-menu${open ? ' open' : ''}`}>
                <a href="#services" onClick={close}>Servicios</a>
                <a href="#about" onClick={close}>Acerca de</a>
                <a href="#faqs" onClick={close}>FAQs</a>
                <a href="#journal" onClick={close}>Journal</a>
            </div>
        </div>
    );
}