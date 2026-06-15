
import Hero from "../components/Hero";
import Card from "../components/Card";
import { cardHome } from "../data/amavizData";
import '../styles/home.css'


export default function Home() {

    return (
        <> <Hero />
            <section className="amaviz-home" id="home">


                <div className="amaviz-home-text">
                    <p className="amaviz-welcome-text">Bienvenidos a Amavíz</p>
                    <p className="amaviz-slogan-text"><strong>LA SALUD DE TU <span className="highlight-blue">PIEL</span> ES NUESTRA <span className="highlight-blue">PRIORIDAD</span></strong></p>
                    <p className="amaviz-paragraph-text">En nuestro spa encontrarás un espacio diseñado para tu bienestar, donde
                        cada tratamiento está pensado para ayudarte a relajarte, renovar tu energía y cuidar tu piel en un ambiente de tranquilidad y armonía.</p>
                </div>

                <div className="container-cards">
                    <div className="amaviz-cards">
                        {cardHome.map((card) => (
                            <Card
                                key={card.id}
                                img={card.img}
                                title={card.title}
                                description={card.description}
                                url={card.url}
                            />
                        ))}
                    </div>
                </div>

                <div className="amaviz-lealtad">
                    <div className="lealtad-content">
                        <h3 className="lealtad-title">Conoce nuestra</h3>
                        <h3 className="lealtad-title">Tarjeta de Lealtad</h3>
                        <p className="descarga-lealtad"><u>Decargala aquí</u></p>
                    </div>
                    <img className="img-lealtad" src="/images/home/tarjeta.png" alt="tarjeta" />
                </div>

                <div className="amaviz-section">

                    <div className="amaviz-one">
                        <img className="one-img" src="/images/home/nails-photo.jpg" alt="Faciales" />
                        <div className="one-content">
                            <h3 className="one-title">it's time to enter</h3>
                            <h3 className="one-title">your glow era</h3>
                            <p className="one-text">Regálate un momento para ti. En nuestro spa
                                encontrarás el equilibrio perfecto entre relajación,
                                bienestar y cuidado personal. Disfruta
                                de tratamientos diseñados para liberar el estrés, renovar
                                tu energía y consentir tu cuerpo.</p>
                            <button className="one-btn">Agendar</button>
                        </div>
                    </div>



                    <div className="amaviz-brands">
                        <p className="brands-texts">Concoce las marcas con las que trabajamos</p>
                        <img className="brands-img" src="/images/home/casmara.png" alt="casmara" />
                        <img className="brands-img" src="/images/home/ainhoa.png" alt="ainhoa" />
                        <img className="brands-img" src="/images/home/celluma.png" alt="celluma" />
                        <img className="brands-img" src="/images/home/germaine.png" alt="germaine" />
                    </div>
                </div>
            </section>
        </>
    );

}