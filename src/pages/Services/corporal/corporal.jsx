import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { corporal } from '../../../data/services';
import '../../../styles/faqs.css';

const slugify = (text) => text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');

export default function Corporal() {

    return (
        <section className="amaviz-faqs" id="corporal">
            <h1 className="faqs-title">Corporal</h1>

            <div className="faqs-list">
                {corporal.map((item) => (
                    <Link className="faq-item faq-link" to={`/services/corporal/${slugify(item.type)}`} key={item.id}>
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
