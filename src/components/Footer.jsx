function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo-section">
                    <img src="/assets/logo.png" alt="Amaviz Logo" className="footer-logo" />
                </div>
                <div className="footer-section">
                    <ul>
                        <li>Ubicación</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div className="copyright-section">
                    <p>&copy; 2025 Amaviz. Todos los derechos reservados.</p>
                    <p>Desarrollado por Andrea Estrada</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;