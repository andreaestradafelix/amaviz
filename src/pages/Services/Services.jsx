import { services } from '../../data/services';
import '../../styles/services.css';

export default function Services() {

    return (
        <section className="amaviz-services" id="services">

            <h1 className="services-title">Servicios</h1>

            <div className="services-list">
                {services.map((service) => (
                    <div className="service-item" key={service.id}>
                        <img className='services-img' src={service.img} alt={service.type} />
                        <button className='services-btn'>{service.type}</button>
                    </div>
                ))}
            </div>

        </section>
    );

}
