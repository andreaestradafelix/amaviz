
import { useState } from 'react';
import { faciales } from '../../../data/services';
import '../../../styles/faqs.css';

export default function Faciales() {

    const [openId, setOpenId] = useState(null);

    const toggleFacial = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="amaviz-faqs" id="faciales">
            <h1 className="faqs-title">Faciales</h1>
            <p className="faqs-text">Cada facial es personalizado según el tipo de piel y necesidades.</p>

            <div className="faqs-list">
                {faciales.map((fac) => (
                    <div className="faq-item" key={fac.id}>
                        <button className="faq-question" onClick={() => toggleFacial(fac.id)}>
                            <span>{fac.type}</span>
                            <span className="faq-icon">{openId === fac.id ? '-' : '+'}</span>
                        </button>

                        {openId === fac.id && (
                            <p className="faq-answer">{fac.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
