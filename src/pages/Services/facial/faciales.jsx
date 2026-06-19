import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { faciales } from '../../../data/services';
import '../../../styles/faqs.css';

const slugify = (text) => text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');

export default function Faciales() {

    return (
        <section className="amaviz-faqs" id="faciales">
            <h1 className="faqs-title">Faciales</h1>

            <div className="faqs-list">
                {faciales.map((item) => (
                    <Link className="faq-item faq-link" to={`/services/faciales/${slugify(item.type)}`} key={item.id}>
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
