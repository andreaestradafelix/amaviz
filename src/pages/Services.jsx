import { Link } from 'react-router-dom';
import { services } from '../data/services';
import '../styles/services.css';

export default function Services() {

    return (
        <section className="amaviz-services" id="services">

            <h1 className="services-title">Servicios</h1>

            <div className="services-list">
                {/*Map que recorre el objeto*/}
                {services.map((service) => (
                    <div className="service-item" key={service.id}>
                        <img className='services-img' src={service.img} alt={service.type} />
                        {service.type === "Faciales" || service.type === "Corporal"
                            || service.type === "Depilación Láser" || service.type === "Más Servicios" ? (
                            <Link to={service.url} className='services-btn'>{service.type}</Link>
                        ) : (
                            <button className='services-btn'>{service.type}</button>
                        )}
                    </div>
                ))}
            </div>

        </section>
    );

}
