
import { useState } from 'react';
import { cardFaqs } from '../data/preguntas';
import '../styles/faqs.css';

export default function Faqs() {

    const [openId, setOpenId] = useState(null);

    const toggleFaq = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="amaviz-faqs" id="faqs">
            <h1 className="faqs-title">Preguntas Frecuentes</h1>

            <div className="faqs-list">
                {cardFaqs.map((faq) => (
                    <div className="faq-item" key={faq.id}>
                        <button className="faq-question" onClick={() => toggleFaq(faq.id)}>
                            <span>{faq.pregunta}</span>
                            <span className="faq-icon">{openId === faq.id ? '-' : '+'}</span>
                        </button>

                        {openId === faq.id && (
                            <p className="faq-answer">{faq.respuesta}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );

}
