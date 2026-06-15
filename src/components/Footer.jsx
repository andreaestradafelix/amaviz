import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import '../styles/components/footer.css';

export default function Footer() {

    return (
        <>
            <div className="footer-container">
                <footer className='footer'>
                    <div className="footer-top">
                        <Link to="/" className="footer-logo"><img src="/icon.png" alt="Logo" height="60" /></Link>
                        <div className='footer-link'>
                            <ul>
                                <li>Contáctanos</li>
                                <li>Ubicación</li>
                            </ul>
                        </div>
                        <div className="footer-social-block">
                            <span>Redes sociales:</span>
                            <ul className="footer-socials">
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=61554720627978" target="_blank" rel="noreferrer" aria-label="Facebook">
                                        <FaFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/amaviz_cosmetologia/" target="_blank" rel="noreferrer" aria-label="Instagram">
                                        <FaInstagram />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='developer'>
                        <p>© 2026 Andrea Estrada</p>
                    </div>
                </footer>
            </div>

        </>
    )

}