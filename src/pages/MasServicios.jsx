import { masServicios } from "../data/services";
import '../styles/masServicios.css';

export default function MasServicios() {

    return (
        <section className="masServicios-section">

            <div className="masServicios-hero">
                <img className="masServicios-hero-img" src="/images/home/nails-photo.jpg" alt="Más Servicios" />
                <div className="masServicios-hero-overlay">
                    <h1 className="masServicios-hero-title">Más Servicios</h1>
                    <p className="masServicios-hero-subtitle">Descubre todos los tratamientos que tenemos para ti</p>
                </div>
            </div>

            <div className="masServicios-cards">
                {masServicios.map((servicio) => (
                    <div className="masServicios-card" key={servicio.id}>
                        <div className="masServicios-card-img-wrapper">
                            <img className="masServicios-card-img" src={servicio.img} alt={servicio.type} />
                        </div>
                        <div className="masServicios-card-body">
                            <h3 className="masServicios-card-title">{servicio.type}</h3>
                            <p className="masServicios-card-text">{servicio.description}</p>
                            <button className="masServicios-card-btn">Agendar</button>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );

}
