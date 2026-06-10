import '../styles/about.css';
export default function About() {

    return (

        <section className="amaviz-about" id="about">

            <div className="amaviz-text-title-abu¿out">
                <p className="amaviz-about-title">Acerca de Mi</p>
            </div>

            <div className="amaviz-about-photo">
                <div className="about-photo">
                    <img src="/images/about-photo.jpg" alt="Photo About" />
                </div>
            </div>

            <div className="amaviz-about-text">
                <p className="amaviz-title-text">¡Hola, soy Dania Amavizca!</p>
                <p className="amaviz-text">Soy la creadira de Amavíz Cosmetología. Me apasadiona ayudar 
                    a las personas a sentirse bien consigo mismas a trvés del cuidado de la piel y tratamientos estéticos.</p>
                <p className="amaviz-text">Soy licenciada en cosmetología y cuento con un diplomado en Dermocosmiatría
                    . Me mantengo en constante actualización sobre protocolos, productos y procedimientos para ofrecer
                    siempre tratamientos seguros, efectivos y personalizados.</p>
                <p className="amaviz-text">Mi objetivo es brindarte una experiencia de bienestar, confianza y resultados visibles en cada sesión.</p>
            </div>

        </section>
    );

}