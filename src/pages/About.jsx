
import '../styles/about.css';

export default function About() {

    return (

        <section className="amaviz-about" id="about">

            <div className="amaviz-text-title-about">
                <h1 className="amaviz-about-title">Acerca de Mi</h1>
            </div>

            <div className="amaviz-about-content">
                <div className="amaviz-about-photo">
                    <div className="about-photo">
                        <img src="/images/about-photo.jpg" alt="Photo About" />
                    </div>
                </div>

                <div className="amaviz-about-text">
                    <h2 className="amaviz-title-text">¡Hola, me llamo Dania Amavizca!</h2>
                    <p className="amaviz-text">Soy la creadora de Amavíz Cosmetología. Me apasiona ayudar
                        a las personas a sentirse bien consigo mismas a través del cuidado de la piel y tratamientos estéticos.</p>
                    <p className="amaviz-text">Soy licenciada en cosmetología y cuento con un diplomado en Dermocosmiatría.
                        Me mantengo en constante actualización sobre protocolos, productos y procedimientos para ofrecer
                        siempre tratamientos seguros, efectivos y personalizados.</p>
                    <p className="amaviz-text">A lo largo de mi trayectoria he tenido la oportunidad de acompañar a muchas
                        personas en su proceso de cuidado personal, ayudándolas a recuperar la confianza en su piel
                        y a sentirse cómodas con ellas mismas.</p>
                    <p className="amaviz-text">Cada tratamiento que realizo está pensado de forma personalizada,
                        tomando en cuenta el tipo de piel, las necesidades y los objetivos de cada persona. Mi objetivo es brindarte una experiencia de bienestar, confianza y
                        resultados visibles en cada sesión.</p>
                </div>

                
            </div>

        </section>
    );

}