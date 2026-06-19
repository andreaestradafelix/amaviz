import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { masServicios } from '../../../data/services';
import '../../../styles/faqs.css';

const slugify = (text) => text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\s+/g, '-');

export default function MasServicios() {

    return (
        <section className="amaviz-faqs" id="mas-servicios">
            <h1 className="faqs-title">Más Servicios</h1>

            <div className="faqs-list">
                {masServicios.map((item) => (
                    <Link className="faq-item faq-link" to={`/services/mas-servicios/${slugify(item.type)}`} key={item.id}>
                        <div className="faq-question">
                            <span>{item.type}</span>
                            <span className="faq-arrow"><FaChevronRight /></span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}