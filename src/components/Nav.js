function Nav() {
    return (
        <nav className="main-nav">
            <div className="logo-container">
                <img src="/assets/logo.png" alt="Amaviz Logo" className="logo" />
            </div>
            <div className="menu-container">
                <ul>
                    <li>Servicios</li>
                    <li>Acerca de</li>
                    <li>FAQs</li>
                    <li>Contáctanos</li>
                    <li>Journal</li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;