import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { laser } from '../../../data/services';
import '../../../styles/faqs.css';

const slugify = (text) => text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\s+/g, '-');

export default function Laser() {

    return (
        <section className="amaviz-faqs" id="laser">
            <h1 className="faqs-title">Láser</h1>

            <div className="faqs-list">
                {laser.map((item) => (
                    <Link className="faq-item faq-link" to={`/services/laser/${slugify(item.type)}`} key={item.id}>
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