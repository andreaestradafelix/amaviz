import { facialesAutor } from '../../../data/faciales';
import '../../../styles/menu/facial/facialesAutor.css';

export default function FacialesAutor() {
    return (
        <section className="faciales-autor-section">
            <h1 className="faciales-autor-title">Faciales de Autor</h1>
            <p className='faciañes-autor-text'>Todos nuestros tratamientos son personalizados e incluyen diagnóstico facial, 
                limpieza adaptada a tu piel, selección de activos, masaje facial y 
                recomendaciones para el cuidado en casa. Porque cada piel es única, cada protocolo también lo es.</p>
            <div className="faciales-autor-grid">
                {facialesAutor.map((item) => (
                    <div className="faciales-autor-card" key={item.id}>
                        <h3 className="faciales-autor-card-name">{item.name}</h3>
                        <p className="faciales-autor-card-desc">{item.description}</p>
                        <a
                            className="faciales-autor-card-btn"
                            href="https://wa.me/526421829988"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Agendar
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
